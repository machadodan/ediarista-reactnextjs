import produce from 'immer';
import { ApiLinksInterface } from '../@types/ApiLinksInterface';
import React, {useReducer, useEffect} from "react";
import { ApiService } from '../services/ApiService';
import { data } from 'cypress/types/jquery';

export const inicialState = {
  externalService: {} as ApiLinksInterface[],
};

export type InicialStateType = typeof inicialState;
export type ExternalServiceActionType = {
  type: string
  payload?: unknown
}

const reducer = (
  state: InicialStateType, 
  action: ExternalServiceActionType
  ): InicialStateType => {
    const nextState = produce(state, (draftState) => {
      switch (action.type) {
        case "UPDATE":
      
      draftState.externalService = action.payload as ApiLinksInterface[];
      break;

      }
    });
    return nextState;

  };

  export interface ExternalServiceReducerInterface {
    externalServicesState: InicialStateType;
    externalServicesDispatch: React.Dispatch<ExternalServiceActionType>;
  }

export function useExternalServicesReduce(): ExternalServiceReducerInterface {
  const [state, dispatch] = useReducer(reducer, inicialState);

  useEffect(() => {
    ApiService.get<{links: ApiLinksInterface[]}>("/api").then(
      ({data}) => {
        dispatch({
          type: "UPDATE",
          payload: data.links
        });  
    }
    );
  }, []);
  
  return {
    externalServicesState: state,
    externalServicesDispatch: dispatch
  };
}




