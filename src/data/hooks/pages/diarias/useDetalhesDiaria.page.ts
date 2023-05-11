import { useContext, useEffect, useState } from "react";
import { DiariaInterface } from "../../../@types/DiariaInterface";
import { UserInterface } from "../../../@types/UserInterface";
import { DiariaContext } from "../../../contexts/DiariaContext";
import { ApiServiceHateoas } from "../../../services/ApiService";


export default function useDetalhesDiaria(diariaId: string) {
  const {
      diariaState: { diarias },
    } = useContext(DiariaContext),
    [diaria, setDiaria] = useState<DiariaInterface>(),
    [cliente, setCliente] = useState<UserInterface>(),
    [diarista, setDiarista] = useState<UserInterface>();

    useEffect(() => {
      if(diarias.length) {
        getDiaria(diarias, diariaId);        
      }
    }, [diarias, diariaId]);
  async function getDiaria(diarias: DiariaInterface[], diariaId: string) {
    const diariaSelecionada = diarias.find(
      (diaria) => diaria.id === Number(diariaId)
      );
      
      if(diariaSelecionada) {
        ApiServiceHateoas(diariaSelecionada.links, "self", async (request)=>{
         const {data: diariaCompleta} = await request<DiariaInterface>();
         
         if(diariaCompleta) {
          setDiaria(diariaCompleta);
          diariaCompleta.diarista && setDiarista(diariaCompleta.diarista);
          diariaCompleta.cliente && setCliente(diariaCompleta.cliente);
         }
        });
      }
  }
  return {diaria, diarista, cliente};
}