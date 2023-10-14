import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';


interface UserLoginInterface {
  email: string;
  password: string;
}

export const loginAPI = async (fields: UserLoginInterface) => {
    const { data } = await axios.post('/public/user/login', fields);
    return data;
};


export const getUserAPI = async () => {
  const { data } = await axios.get('/auth/user/info');
  return data;
};

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
export const useVerifyNumber = async(fields: VerifyNumberInterface)=> {
    const { data } = await axios.post('/public/user/verify-number', fields)
    return data;
}

interface UserSignupInterface {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  password: string;
}
export const useSignUp = async(fields: UserSignupInterface) => {
    const { data } = await axios.post('/public/user/sign-up', fields);
    return data;
}

export const refreshAPI = async () => {
  const { data } = await axios.post('/auth/user/refresh');
  return data
}

export const getUserProfile = async () => {
    const { data } = await axios.get('/auth/user/profile');
    return data
}

interface ChangePasswordInterface {
  newPassword: string;
  oldPassword: string;
}
export const changePassword = async (fields: ChangePasswordInterface) => {
    const { data } = await axios.patch('/auth/user/change-password', fields)
    return data
}

interface ProfileUpdateInterface {
  firstName: string;
  lastName: string;
}
export const profileUpdate = async (fields: ProfileUpdateInterface) => {
 
    const { data } = await axios.patch('/auth/user/profile/update', fields)
    return data
}

interface ClaimUsernameInterface {
  firstName: string;
  lastName: string;
}
export const claimUsername = async (fields: ClaimUsernameInterface) => {
    const { data } = await axios.patch('/auth/user/profile/claim-username', fields)
    return data
}

interface FileUploadInterface {
  file: File;
}
export const fileUpdate = async (fields: FileUploadInterface) => {
    const formData = new FormData(); // Create a FormData object to hold your data and file
    // Append the file to the FormData object
    formData.append('file', fields.file);
    const { data } = await axios.post('/auth/user/profile/upload', fields, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=---XYZ}`, // Set the content type to multipart/form-data for file uploads
      }
    })
    return data
}