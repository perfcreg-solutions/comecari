import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { getUserAPI, loginAPI } from 'services'
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";

interface IAuthContext {
  isAuthLoading: boolean;
  isAuthenticated: boolean;
  // authError: string | null;
  // authUser: any;
  // setAccessToken: (token: string) => void;
  // setAuthUser: (user: any) => void;
  refetchAuthUser: () => void;
  // setIsAuthLoading: (isLoading: boolean) => void;
  login: (credential: any) => void
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


  const refetchAuthUser = () => {
    setIsAuthenticated(false);
    setAuthError(null);
    setAuthUser(null);
    setAccessToken(null);
  };

  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        // Before we send any request with axios, we need to get accessToken auth and
        // set it into the each request headers, so the API can authorize requests.
        // And the baseUrl, so we don't have to write our API url in each request.
        axios.interceptors.request.use(
          async (config) => {
            if (!config.headers['Authorization']) {
              config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            return config;
          },
          (error) => {
            console.log('Setting accessToken in axios interceptor failed', error);
            return Promise.reject(error);
          }
        );
        
          const {data} = await getUserAPI(); // Fetch user data
          if (data.type == 'ADMIN') {
            setAuthUser(data)
            router.push('/admin');
          } else {
            // Redirect to regular user page
            console.log(data)
          }
     
      })();
      // Fetch authenticated user's data after login
      
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
      setAuthError(error.message)
      setIsAuthLoading(false)
    },
  });

  const login = async (credentials : UserLoginInterface) => {
    try {
      await loginMutation.mutateAsync(credentials); // Use mutateAsync to return the promise
    } catch (error) {
      console.error('Login error:', error);
    }
  };


 

  const value = {
    login,
    isAuthenticated,
    isAuthLoading,
    // accessToken,
    // setAuthUser,
    // refetchAuthUser,
    setIsAuthLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
