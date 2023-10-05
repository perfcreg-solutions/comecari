import { useMutation } from '@tanstack/react-query';
import axios from 'axios';


interface UserLoginInterface {
  email: string;
  password: string;
}

export const loginAPI = async (fields: UserLoginInterface) => {

  try {
    const { data } = await axios.post('/public/user/login', fields);
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};


export const getUserAPI = async () => {
  try {
    const { data } = await axios.get('/auth/user/info');
    return data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Get user failed');
  }
}

interface AddNumberInterface {
  mobileNumber: string;
}

export const useAddNumber = async (field: AddNumberInterface) => {
    const { data } = await axios.post('/public/user/add-number', field)
    return data;
}

interface VerifyNumberInterface {
  token: string;
}
export const useVerifyNumber = (fields: VerifyNumberInterface): any => {
  const verifyNumber = async () => {
    const { data } = await axios.post('/public/user/verify-number', fields)
    return data;
  }
  return useMutation(verifyNumber)
}

interface UserSignupInterface {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  password: string;
}
export const useSignUp = (fields: UserSignupInterface): any => {
  const signUp = async () => {
    const { data } = await axios.post('/public/user/sign-up', fields);
    return data;
  }
  return useMutation(signUp)
}


export const refreshAPI = async () => {
  const { data } = await axios.post('/auth/user/refresh/');
  return data
}

export const getUserProfile = async () => {
  try {
    const { data } = await axios.get('/auth/user/profile');
    return data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Get user failed');
  }
}

interface ChangePasswordInterface {
  newPassword: string;
  oldPassword: string;
}
export const changePassword = async (fields: ChangePasswordInterface) => {
  try {
    const { data } = await axios.patch('/auth/user/change-password', fields)
    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Change Password Unsuccessful')
  }
}

interface ProfileUpdateInterface {
  firstName: string;
  lastName: string;
}
export const profileUpdate = async (fields: ProfileUpdateInterface) => {
  try {
    const { data } = await axios.patch('/auth/user/profile/update', fields)
    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Change Password Unsuccessful')
  }
}

interface ClaimUsernameInterface {
  firstName: string;
  lastName: string;
}
export const claimUsername = async (fields: ClaimUsernameInterface) => {
  try {
    const { data } = await axios.patch('/auth/user/profile/claim-username', fields)
    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Username claim successful')
  }
}

interface FileUploadInterface {
  file: File;
}
export const fileUpdate = async (fields: FileUploadInterface) => {
  try {
    const formData = new FormData(); // Create a FormData object to hold your data and file
    // Append the file to the FormData object
    formData.append('file', fields.file);
    const { data } = await axios.post('/auth/user/profile/update', fields, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data for file uploads
      }
    })
    return data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'File Upload Successful')
  }
}

