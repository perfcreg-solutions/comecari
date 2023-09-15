import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';






export const useLogin = (): any => {
  interface UserLoginInterface {
    email: string;
    password: string;
  }

  const login = async (fields: UserLoginInterface) => {
      const { data } = await axios.post('/public/user/login', fields);
      return data;
    };
    return useMutation(login);
}


export const useGetAuthUser = async () => {
  const getAuthUser = async () => {
    const { data } = await axios.get('/auth/user/info');
    return data;
  };

  const { data, isLoading, refetch } = useQuery(['getAuthUser'], getAuthUser, {
    enabled: false,
  });

  return { isLoading, data, refetch };
}



interface updateUserProps {
  
  };
}

export const useUpdateUser = (): any => {
  const updateUser = async (data: updateUserProps) => {
    const { data } = await axios.patch(`/auth/update/${userId}`, fields);
    return data;
  };

  return useMutation(updateUser);
};

interface AddNumberInterface {
  mobileNumber: string;
}
export const addNumber = async (fields: AddNumberInterface) => {
  try {
    const { data } = await axios.post('/public/user/add-number', fields)
    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Invalide PhoneNumber');
  }
}


