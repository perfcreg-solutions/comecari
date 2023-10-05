import axios from "axios";

export const getTruckListAPI = async () => {
    try {
        const { data } = await axios.get('/company/truck/list');
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Getting Trucks');
    }
}

export const getTruckAPI = async () => {
    try {
        const { data } = await axios.get(`/company/truck/get/${truck}`);
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Getting Truck');
    }
}

interface CapacityObject {
    weight: number;
    height: number;
    length: number;
    width: number;
}

interface CreateTruckInterface {
    truckType: string;
    user: string;
    driver: string;
    company: string;
    registrationNumber: string;
    location: string;
    licensePlateNumber: string;
    capacity: CapacityObject;
}

export const createTruck = async (fields:CreateTruckInterface) => {
    try {
        const { data } = await axios.post('/company/truck/create', fields);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Adding Truck');
    }
}


export const deleteCompanyTruck = async () => {
    try {
        const { data } = await axios.delete(`/company/truck/delete/${truck}`);
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Deleting Truck');
    }
}

interface UpdateTruckInterface {
    truckType: string;
    user: string;
    driver: string;
    company: string;
    registrationNumber: string;
    location: string;
    licensePlateNumber: string;
    capacity: CapacityObject;
}

export const updateTruck = async (fields: UpdateTruckInterface) => {
    try {
        const { data } = await axios.put(`/company/truck/update/${truck}`, fields);
        return data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Updating Truck');
    }
}

export const makeCompanyTruckInactive = async () => {
    try {
        const { data } = await axios.patch(`/company/truck/update/${truck}/inactive`);
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Changing Status');
    }
}

export const makeCompanyTruckActive = async () => {
    try {
        const { data } = await axios.patch(`/company/truck/update/${truck}/active`);
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Changing Status');
    }
}


export const truckImportAPI = async () => {
    try {
        const { data } = await axios.post('/company/truck/import');
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Sending Import');
    }
}

export const truckExportAPI = async () => {
    try {
        const { data } = await axios.post('/company/truck/export');
        return data
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error Sending Export');
    }
}
