// DriverContext.js

import React, { ReactNode, createContext, useContext } from 'react';
import { useQuery, useMutation } from "@tanstack/react-query";
import * as driverService from 'services/company.driver'; // Import your API functions


interface IDriverContext {
        drivers: any,
        isLoading: boolean,
        error: any,
        createDriver : (credential: any) => void,
        updateDriver:  (credential: any) => void,
        deleteDriver: (credential: any) => void,
        makeDriverInactive: (credential: any) => void,
        makeDriverActive: (credential: any) => void,
        importDrivers: (credential: any) => void,
        exportDrivers: (credential: any) => void,
  }

  interface IDriverProviderProps {
    children: ReactNode;
  }
// Create a context for the DriverContext
const DriverContext =createContext<IDriverContext | undefined>(undefined);

// Custom hook to consume the DriverContext
export function useDriver() {
  return useContext(DriverContext);
}

// DriverProvider component
const DriverProvider: React.FC<IDriverProviderProps> = ({ children }) => {
  // Define queries and mutations using React Query
  const { data: drivers, isLoading, error } = useQuery(['drivers'], driverService.listCompanyDriverAPI);

  const { mutate: createDriver } = useMutation(driverService.createDriver);
  const { mutate: updateDriver } = useMutation(driverService.updateDriver);
  const { mutate: deleteDriver } = useMutation(driverService.deleteCompanyDriver);

  const { mutate: makeDriverInactive } = useMutation(driverService.makeCompanyDriverInactive);
  const { mutate: makeDriverActive } = useMutation(driverService.makeCompanyDriverActive);

  const { mutate: importDrivers } = useMutation(driverService.driverImportAPI);
  const { mutate: exportDrivers } = useMutation(driverService.driverExportAPI);

  return (
    <DriverContext.Provider
      value={{
        drivers,
        isLoading,
        error,
        createDriver,
        updateDriver,
        deleteDriver,
        makeDriverInactive,
        makeDriverActive,
        importDrivers,
        exportDrivers,
      }}
    >
      {children}
    </DriverContext.Provider>
  );
}

export default DriverProvider
