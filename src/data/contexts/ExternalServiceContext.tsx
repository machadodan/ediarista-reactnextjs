import {createContext} from 'react';
import { 
  ExternalServiceReducerInterface, 
  inicialState, 
  useExternalServicesReduce
 } from '../reduces/ExternalServiceReducer';
 import React, { PropsWithChildren } from 'react';

const initialValue: ExternalServiceReducerInterface = {
  externalServicesDispatch: () => {},
  externalServicesState: inicialState,
};

export const ExternalServiceContext = createContext(initialValue);

export const ExternalServiceProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const provider = useExternalServicesReduce();

  return (
    <ExternalServiceContext.Provider value={provider}>
      {children}
    </ExternalServiceContext.Provider>
  );
};