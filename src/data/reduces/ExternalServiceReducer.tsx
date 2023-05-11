import produce from 'immer';
import { ApiLinksInterface } from '../@types/ApiLinksInterface';
import React, {useReducer, useEffect} from "react";
import { ApiService } from '../services/ApiService';


export const initialState = {
  externalService: {} as ApiLinksInterface[],
};

export type InitialStateType = typeof initialState;
export type ExternalServiceActionType = {
  type: string;
  payload?: unknown;
};

const reducer = (
  state: InitialStateType,
  action: ExternalServiceActionType
): InitialStateType => {
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
    externalServicesState: InitialStateType;
    externalServicesDispatch: React.Dispatch<ExternalServiceActionType>;
  }

export function useExternalServicesReduce(): ExternalServiceReducerInterface {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    ApiService.get<{ links: ApiLinksInterface[] }>("/api").then(({ data }) => {
      dispatch({
        type: "UPDATE",
        payload: data.links,
      });
    });
  }, []);
  
  return {
    externalServicesState: state,
    externalServicesDispatch: dispatch,
  };
}




