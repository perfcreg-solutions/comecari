import { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from 'axios'
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useLogin, useGetAuthUser } from 'services'
import { useMutation, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";

interface IAuthContext {
  isAuthLoading: boolean;
  isAuthenticated: boolean;
  authError?: string;
  authUser?: any;
  setAuthUser?: any;
  refetchAuthUser?: any;
  setIsAuthLoading: (isLoading: boolean) => void;
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



  const { refetch: getAuthUser } = useGetAuthUser();
  const { mutateAsync: userLoginMutaion } = useLogin();
  // const { mutateAsync: updateUserMutation } = useUpdateUser();
  // const { mutateAsync: addMemberAfterInviteMutation } =useAddMemberAfterInvite();

  /**
   * Re-fetches authUser information from the API and sets it in the state.
   */
  const refetchAuthUser = useCallback(async () => {
    const { data: refreshAuthUser } = await getAuthUser();
    setAuthUser(refreshAuthUser);
  }, [getAuthUser]);

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
            // console.log(accessToken);
            return config;
          },
          (error) => {
            console.log('Setting accessToken in axios interceptor failed', error);
            return Promise.reject(error);
          }
        );
          const {data} = await getAuthUser(); // Fetch user data
          console.log(data.data.type)

          if (data.data.type === 'ADMIN') {
            setAuthUser(data)
            router.push('/admin');
          } else {
            console.log(data)
          }
     
      })();
      
    }
  }, [isAuthenticated]);



  const login = async (credentials : UserLoginInterface) => {
    try {
      await userLoginMutaion(credentials, {
        onMutate: () => setIsAuthLoading(true),
        onSuccess: (data: any) => {
          setAccessToken(data.data.accessToken);
          setRefreshToken(data.data.refreshToken);
          setIsAuthenticated(true);
          setIsAuthLoading(false);
        },
        onError: (error: any) => {
          setAuthError(error.message)
          setIsAuthLoading(false)
        },
      }); // Use mutateAsync to return the promise
    } catch (error) {
      console.error('Login error:', error);
    }
  };


 

  const value = {
    isAuthenticated,
    isAuthLoading,
    authUser,
    authError,
    login,
    setAuthUser,
    refetchAuthUser,
    setIsAuthLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
