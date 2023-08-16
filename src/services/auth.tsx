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
    const  { data }   = await axios.get('/auth/user/profile');
    return data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Get user failed');
  }
}

interface AddNumberInterface {
  mobileNumber: string;
}
export const addNumber = async (fields: AddNumberInterface) => {
  try{
    const {data} = await axios.post('/public/user/add-number', fields)
    return data
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Invalide PhoneNumber');
  }
}


