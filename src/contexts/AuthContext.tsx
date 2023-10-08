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
  authUser: any,
  error: boolean,
  authError: string
  logout: () => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

interface UserLoginInterface {
  email: string;
  password: string;
}


// Create key constants for localStorage
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const AUTH_USER_KEY = 'auth_user';
const IS_AUTHENTICATED_KEY = 'is_authenticated'

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {

  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<any>(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('is_authenticated') || false;
    }
    return null;
  });
  const [error, setError] = useState<boolean>(false);

  const [authError, setAuthError] = useState<string | null>(null);

  const [authUser, setAuthUser] = useState<any>(() => {
    // Initialize authUser from localStorage or null
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('auth_user')) || null;
    }
  });

  const [accessToken, setAccessToken] = useState<string>(() => {
    // Initialize accessToken from localStorage or null
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('access_token') || null;
    }
    return null;
  });

  const [refreshToken, setRefreshToken] = useState<string>(() => {
    // Initialize refreshToken from localStorage or null
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('refresh_token') || null;
    }
    return null;
  });

  const { data: user } = useQuery(['user'], getUserAPI, {
    refetchOnWindowFocus: false,
  });

  const loginMutation = useMutation(loginAPI, {
    onMutate: () => {
      setAccessToken('');
      setRefreshToken('');
      setIsAuthenticated(false);
      setAuthError("")
      setError(false)
      setIsAuthLoading(true);
    },
    onSuccess: (data) => {
      setAccessToken(data.data.accessToken);
      setRefreshToken(data.data.refreshToken);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(IS_AUTHENTICATED_KEY, true);
        localStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user?.data));
      }
      console.log(user?.data)
      setAuthUser(user?.data);
      setIsAuthenticated(true);
      setIsAuthLoading(false);
    },
    onError: (error: any) => {
      setAuthError(error.response.data.message)
      setIsAuthLoading(false)
      setError(true)
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
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
            localStorage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
          }
          setAccessToken(data.data.accessToken);
          setRefreshToken(data.data.refreshToken);
          setIsAuthLoading(false);
        },
        onError: () => {
         logout()
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

  const logout = async () => {
    setIsAuthenticated(false);
    setAccessToken('');
    setRefreshToken('');
    setAuthUser(null);
    setAuthError(null);
    // Clear accessToken and refreshToken from localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
      localStorage.removeItem(IS_AUTHENTICATED_KEY);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      const requestInterceptor = axios.interceptors.request.use(
        (config) => {
          if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
          }
          return config;
        },
        (error) => {
          if (error.response && error.response.status === 401) {
            console.log("401 error encountered, trying to refresh token");
            refetchAuthUser();
          }
          console.log('Setting accessToken in axios interceptor failed', error);
          return Promise.reject(error);
        }
      );
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
      };
    }
  }, [isAuthenticated, accessToken]);
  

  const value = {
    isAuthenticated,
    isAuthLoading,
    accessToken,
    authUser,
    refetchAuthUser,
    setIsAuthLoading,
    login,
    logout,
    error,
    authError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;