import { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect, useCallback } from "react";
import useSwr, {mutate} from "swr";
import { ApiLinksInterface } from "../@types/ApiLinksInterface";
import {ApiServiceHateoas } from "../services/ApiService";

export default function useApiHateoas<OutputType, Err = unknown>(
  links: ApiLinksInterface[] = [],
  nome: string | null,
  config?: AxiosRequestConfig
): { data: OutputType | undefined; error: AxiosError<Err> | undefined } {
  const makeRequest = useCallback(() => {
    return new Promise<OutputType>((resolve) => {
      ApiServiceHateoas(links, nome ?? "", async (request) => {
        const response = await request<OutputType>(config);
        resolve(response.data);
      });
    }); 
  }, [links, nome, config]);
  
  const { data, error } = useSwr<OutputType, AxiosError<Err>>(
    nome, 
    makeRequest
  );

  useEffect(()=>{
    mutate(nome, mutate);
  }, [links, nome, makeRequest]);
  
  return { data, error };  
}
