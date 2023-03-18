import produce from 'immer';
import { ApiLinksInterface } from '../@types/ApiLinksInterface';
import React, {useReducer, useEffect} from "react";
import { ApiService } from '../services/ApiService';
import { UserInterface, UserType } from '../@types/UseInterface';
import { CidadeInterface, EnderecoInterface } from '../@types/EnderecoInterface';


export const inicialState = {
  user: {
    nome_completo: "",
    nascimento: "",
    cpf: "",
    email: "",
    foto_usuario: "",
    telefone: "",
    reputacao: 0,
    chave_pix: "",
    tipo_usuario: UserType.Cliente,
  } as UserInterface,
  addressList: [] as CidadeInterface[],
  userAddress: {
    logradouro: "",
    bairro: "",
    complemento: "",
    cep: "",
    cidade: "",
    estado: "",
    numero: "",
  } as EnderecoInterface,
  isLogging: false,
};

export type InicialStateType = typeof inicialState;

type UserAction = 
  | "SET_USER"
  | "SET_LOGGING"
  | "SET_ADDRESS_LIST"
  | "SET_USER_ADDRESS";

export type UserActionType = {
  type: string
  payload?: unknown
}

const reducer = (
  state: InicialStateType,
  action: UserActionType
): InicialStateType => {
  const nextState = produce(state, (draftState) => {
    switch (action.type) {
      case "SET_USER":
        draftState.user = action.payload as UserInterface;
        draftState.isLogging = false;
        break;
      case "SET_ADDRESS_LIST":
        draftState.addressList = action.payload as CidadeInterface[];
        break;
      case "SET_USER_ADDRESS":
        draftState.userAddress = action.payload as EnderecoInterface;
        break;
      case "SET_LOGGING":
        draftState.isLogging = action.payload as boolean;
        break;
    }
  });
  return nextState;
};

  export interface UserReducerInterface {
    useState: InicialStateType;
    useDispatch: React.Dispatch<UserActionType>;
  }

export function useUserReducer(): UserReducerInterface {
  const [state, dispatch] = useReducer(reducer, inicialState);

  return {
    useState: state,
    useDispatch: dispatch,
  };
}




