import axios from "axios";

interface CreateUserInterface {
    companyName: string;
    companyDescription: string;
    companyAddress: string;
}

export const createCompany = async (fields: CreateUserInterface) => {
    try {
        const { data } = await axios.post('/company/user/create', fields);
        return data;
    } catch (error : any) {
        throw new Error(error.response?.data?.message || 'User Create failed');
    }
};

interface UpdateUserInterface {
    companyName: string;
    companyDescription: string;
    companyAddress: string;
}

export const updateCompany = async (fields: UpdateUserInterface) => {
    try {
        const { data } = await axios.put(`/company/user/update/${company}`, fields);
        return data;
    } catch (error : any) {
        throw new Error(error.response?.data?.message || 'User Update failed');
    }
};

export const getCompany = async () => {
    try {
        const { data } = await axios.get('/company/user');
        return data
    } catch (error : any) {
        throw new Error(error.response?.data?.message || 'Get Company User failed');
    }
}
