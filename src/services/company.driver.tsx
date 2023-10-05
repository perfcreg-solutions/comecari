import axios from "axios";


export const listCompanyDriverAPI = async () => {
    try {
        const { data } = await axios.get('/company/driver/list');
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Getting List Failed');
    }
}

export const getCompanyDriverAPI = async () => {
    try {
        const { data } = await axios.get(`/company/driver/get/${driver}`);
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Get Company Driver failed');
    }
}

export const deleteCompanyDriver = async () => {
    try {
        const { data } = await axios.delete(`/company/driver/delete/${driver}`);
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Deleting Driver');
    }
}


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

export const makeCompanyDriverInactive = async () => {
    try {
        const { data } = await axios.patch(`/company/driver/update/${driver}/inactive`);
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Changing Status');
    }
}

export const makeCompanyDriverActive = async () => {
    try {
        const { data } = await axios.patch(`/company/driver/update/${driver}/active`);
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Changing Status');
    }
}

export const driverImportAPI = async () => {
    try {
        const { data } = await axios.post('/company/driver/import');
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Sending Import');
    }
}

export const driverExportAPI = async () => {
    try {
        const { data } = await axios.post('/company/driver/export');
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Sending Export');
    }
}