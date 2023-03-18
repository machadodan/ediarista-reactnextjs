import {createContext} from 'react';
import { 
  UserReducerInterface, 
  inicialState, 
  useUserReducer,
 } from '../reduces/UserReducer';
 import React, { PropsWithChildren } from 'react';

const initialValue: UserReducerInterface = {
  useDispatch: () => {},
  useState: inicialState,
};

export const UserContext = createContext(initialValue);

export const UserProvider: React.FC<PropsWithChildren> = ({children}) => {
  const provider = useUserReducer();

  return (
    <UserContext.Provider value={provider}>{children}</UserContext.Provider>
  );
};