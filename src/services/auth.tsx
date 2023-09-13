import axios from 'axios';


interface UserLoginInterface {
  email: string;
  password: string;
}

export const loginAPI = async (fields: UserLoginInterface) => {
  try {
    const { data } = await axios.post('/public/user/login', fields);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};


export const getUserAPI = async () => {
  try {
    const { data } = await axios.get('/auth/user/profile');
    return data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Get user failed');
  }
}

interface AddNumberInterface {
  mobileNumber: string;
}
export const addNumber = async (fields: AddNumberInterface) => {
  try {
    const { data } = await axios.post('/public/user/add-number', fields)
    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Invalid Phone Number');
  }
}

interface VerifyNumberInterface {
  token: string;
}
export const verifyNumber = async (fields: VerifyNumberInterface) => {
  try {
    const { data } = await axios.post('/public/user/verify-number', fields)
    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Invalid Token')
  }
}

interface UserSignupInterface {
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  password: string;
}
export const signupAPI = async (fields: UserSignupInterface) => {
  try {
    const { data } = await axios.post('/public/user/sign-up', fields);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Sign Up failed')
  }
};

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

