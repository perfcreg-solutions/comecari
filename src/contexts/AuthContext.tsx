import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { getUserAPI, loginAPI, refreshAPI } from 'services'
import { useMutation, useQuery } from "@tanstack/react-query";

interface IAuthContext {
  isAuthLoading: boolean;
  isAuthenticated: boolean;
  refetchAuthUser: () => void;
  login: (credential: any) => void,
  authUser: object
}

interface IAuthProviderProps {
  children: ReactNode;
}

interface UserLoginInterface {
  email: string;
  password: string;
}
const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string>(null);
  const [refreshToken, setRefreshToken] = useState<string>(null);
  const router = useRouter();
  const { data: user} = useQuery(['user'], getUserAPI);

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        axios.interceptors.request.use(

          async (config) => {
            if (!config.headers['Authorization']) {
              config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            return config;
          },
          (error) => {
            if (error.response && error.response.status === 401) {
              console.log("trying to reconnect")
              refetchAuthUser()
            }
            console.log('Setting accessToken in axios interceptor failed', error);
            return Promise.reject(error);
          }
        );

        if (user?.type == 'ADMIN') {
          router.push('/admin');
        } else {
          router.push('/welcome');
        }
      })();
    }
  }, [isAuthenticated]);


  // Login Mutation using react-query
  const loginMutation = useMutation(loginAPI, {
    onMutate: () => setIsAuthLoading(true),
    onSuccess: (data) => {
      setAccessToken(data.data.accessToken);
      setRefreshToken(data.data.refreshToken);
      setIsAuthenticated(true);
      setIsAuthLoading(false);
    },
    onError: (error: any) => {
      setAuthError(error)
      setIsAuthLoading(false)
    },
  });


  const RefreshTokenMutation = useMutation(
    async () => {
      axios.interceptors.request.use(
        async (config) => {
          if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${refreshToken}`;
          }
          return config;
        },
        (error) => {
          console.log('Setting accessToken in axios interceptor failed', error);
          return Promise.reject(error);
        }
      ),
        refreshAPI, {
        onMutate: () => setIsAuthLoading(true),
        onSuccess: (data: any) => {
          setAccessToken(data.data.accessToken);
          setRefreshToken(data.data.refreshToken);
          setIsAuthenticated(true);
          setIsAuthLoading(false);
        },
        onError: () => {
          setAccessToken('');
          setRefreshToken('');
          setIsAuthLoading(false)
          setIsAuthenticated(false);
        }
      }
  });

  const login = async (credentials: UserLoginInterface) => {
    try {
      await loginMutation.mutateAsync(credentials); // Use mutateAsync to return the promise
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const refetchAuthUser = async () => {
    try {
      await RefreshTokenMutation.mutateAsync();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async()=> {
    setIsAuthenticated(false)
    setAccessToken("")
    setRefreshToken("")
  }

  const value = {
    isAuthenticated,
    isAuthLoading,
    accessToken,
    authUser,
    refetchAuthUser,
    setIsAuthLoading,
    login,
    logout,
    authError

  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;