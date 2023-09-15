import axios from "axios";

interface CreateDriverInterface {
    driverLicenseNumber: string;
    driverLicenseExpires: string;
    dateOfBirth: string;
    user: string;
}

export const createDriver = async (fields: CreateDriverInterface) => {
    try {
        const { data } = await axios.post('/company/driver/create', fields);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Driver Create failed');
    }
};

interface UpdateDriverInterface {
    driverLicenseNumber: string;
    driverLicenseExpires: string;
    dateOfBirth: string;
    user: string;
}

export const updateDriver = async (fields: UpdateDriverInterface) => {
    try {
        const { data } = await axios.put(`/company/driver/update/${driver}`, fields);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Driver Update failed');
    }
};