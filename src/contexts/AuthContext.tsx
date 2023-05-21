import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'

import {
  useAddMemberAfterInvite,
  useCreateUserBasedOnAuth0User,
  useGetAuthUser,
  useUpdateUser,
} from '../services';

import { ReactNode } from 'react';

interface IAuthContext {
  isAuthLoading: boolean;
  isAuthenticated: boolean;
  authError: string | null;
  authUser: any;
  setAuthUser: (user: any) => void;
  refetchAuthUser: () => void;
  setIsAuthLoading: (isLoading: boolean) => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider: React.FC<IAuthProviderProps> = ({ children}) => {
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<any>(null);

  const refetchAuthUser = () => {
    // Logic to refetch auth user
  };


  const { refetch: getAuthUser } = useGetAuthUser();
  const { mutateAsync: createUserMutation } = useCreateUserBasedOnAuth0User();
  const { mutateAsync: updateUserMutation } = useUpdateUser();
  const { mutateAsync: addMemberAfterInviteMutation } =useAddMemberAfterInvite();

   /**
   * Checks if a user is authenticated in auth
   * Gets the accessToken from the auth and sets in axios headers
   * Gets the user record from our db or creates a new one
   */
   useEffect(() => {
    if (isAuthLoading) {
      console.log('Auth0 Loading...');
      return;
    }

    if (authError) {
      console.log(authError);
      setAuthUser(null);
      setIsAuthLoading(false);
      return;
    }

    if (!isAuthenticated) {
      console.log('Auth0 is not authenticated.');
      setAuthUser(null);
      setIsAuthLoading(false);
      return;
    }

    if (!authUser) {
      console.log("Auth0 Can't find user");
      setAuthUser(null);
      setIsAuthLoading(false);
      return;
    }

    (async () => {
      // Before we send any request with axios, we need to get accessToken auth and
      // set it into the each request headers, so the API can authorize requests.
      // And the baseUrl, so we don't have to write our API url in each request.
      axios.interceptors.request.use(
        async (config) => {
          if (!config.headers['Authorization']) {
            const accessToken = 'sffafsfs';
            config.headers['Authorization'] = `Bearer ${accessToken}`;
          }
          return config;
        },
        (error) => {
          console.log('Setting accessToken in axios interceptor failed', error);
          return Promise.reject(error);
        }
      );

      // Check if there's a user in our db with the auth user's email address.
      const { data: existingAuthUser } = await getAuthUser();

      // Generate fullName from the data provided by auth
      const fullName =
        authUser.given_name && authUser.family_name
          ? `${authUser.given_name} ${authUser.family_name}`
          : authUser.name;

      // // If there isn't, create a new one, based on the values that auth provides.
      // if (!existingAuthUser) {
      //   const userToCreate = {
      //     [`${authProvider}Id`]: authUser.sub,
      //     email: authUser.email,
      //     ...(fullName && { fullName }),
      //     ...(authUser.picture && { avatar: authUser.picture }),
      //     // If a user has authenticated with Social (Google). It means their email is already verified.
      //     ...(authProvider === AuthProviders.GOOGLE && { emailVerified: true }),
      //   };
      //   const newlyCreatedUser = await createUserMutation(userToCreate);
      //   console.log('Successfully created a new auth user: ', newlyCreatedUser);
      //   setAuthUser(newlyCreatedUser);
      //   setIsAuthLoading(false);
      //   return;
      // }

      // setAuthUser(existingAuthUser);
    })();
  }, [
    isAuthenticated,
    authError,
    isAuthLoading,
    authUser,
  ]);

  const value = {
    isAuthLoading,
    isAuthenticated,
    authError,
    authUser,
    setAuthUser,
    refetchAuthUser,
    setIsAuthLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
