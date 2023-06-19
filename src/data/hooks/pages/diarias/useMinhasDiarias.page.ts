import { DiairiaStatus, DiariaInterface } from "../../../@types/DiariaInterface";
import { DiariaContext } from "../../../contexts/DiariaContext";
import useIsMobile from "../../useIsMobile";
import usePagination from "../../usePagination.hook";
import { ApiServiceHateoas, linksResolver } from "../../../services/ApiService";
import { useContext, useMemo, useState } from "react";
import { mutate } from "swr";

type FilterType = "pendentes" | "cancelados" | "avaliados";

export default function useMinhasDiarias() {
  const isMobile = useIsMobile(),
    {
      diariaState: { diarias },
    } = useContext(DiariaContext),
    [filtro, setFiltro] = useState<FilterType>("pendentes"),
    filteredData = useMemo(() => {
      return filtrarDiaria(diarias, filtro);
    }, [diarias, filtro]),
    { currentPage, setCurrentPage, totalPages, itemsPerPage } = usePagination(
      filteredData,
      5
    ),
    [diariaConfirmar, setDiariaConfirmar] = useState<DiariaInterface>(),
    [diariaAvaliar, setDiariaAvaliar] = useState<DiariaInterface>(),
    [diariaCancelar, setDiariaCancelar] = useState<DiariaInterface>();

  function filtrarDiaria(
    diarias: DiariaInterface[], 
    filtro: FilterType
    ): DiariaInterface[] {
      return diarias.filter((diaria) => {
        const avaliadas = [DiairiaStatus.AVALIADO].includes(diaria.status ?? 0),
        cancelado = [
          DiairiaStatus.CANCELADO, 
          DiairiaStatus.SEM_PAGAMENTO,
        ].includes(diaria.status ?? 0),
        pendente = [
          DiairiaStatus.PAGO, 
          DiairiaStatus.CONFIRMADO, 
          DiairiaStatus.CONCLUIDO,
        ].includes(diaria.status ?? 0);

        if (
            (avaliadas && filtro === "avaliados") || 
            (cancelado && filtro === "cancelados") ||
            (pendente && filtro === "pendentes")        
            ) {
          return true;
        }
        return false; 
      });
      
    }

    function alterarFiltro(filtro: FilterType) {
      setCurrentPage(1);
      setFiltro(filtro);
    }

  function podeVisualizar(diaria: DiariaInterface): boolean {
    return linksResolver(diaria.links, "self") != undefined;
  }

  function podeCancelar(diaria: DiariaInterface): boolean {
    return linksResolver(diaria.links, "cancelar_diaria") !== undefined;
  }

  function podeConfirmar(diaria: DiariaInterface): boolean {
    return linksResolver(diaria.links, "confirmar_diarista") !== undefined;
  }

  function podeAvaliar(diaria: DiariaInterface): boolean {
    return linksResolver(diaria.links, "avaliar_diaria") !== undefined;
  }

  async function confirmarDiaria(diaria: DiariaInterface) {
    ApiServiceHateoas(diaria.links, "confirmar_diarista", async (request) => {
      try {
        await request();
        setDiariaConfirmar(undefined);
        atualizarDiarias();
      } catch (error) {}
    });
  }

  async function avaliarDiaria(
    diaria: DiariaInterface, 
    avaliacao: {descricao: string; nota: number}) {
    ApiServiceHateoas(diaria.links, "avaliar_diaria", async (request) => {
      try {
        await request({
          data: avaliacao,
        });
        setDiariaAvaliar(undefined);
        atualizarDiarias();
      } catch (error) {}
    });
  }

  async function cancelarDiaria(
    diaria: DiariaInterface,
    motivo: string
  ) {
    ApiServiceHateoas(diaria.links, "cancelar_diaria", async (request) => {
      try {
        await request({
          data: {
            motivo_cancelamento: motivo,
          },
        });
        setDiariaCancelar(undefined);
        atualizarDiarias();
      } catch (error) {}
    });
  }

  function atualizarDiarias() {
    mutate("lista_diarias");
  }


  return {
    isMobile,
    currentPage,
    setCurrentPage,
    totalPages,
    itemsPerPage,
    filteredData,
    podeVisualizar,
    podeCancelar,
    podeConfirmar,
    podeAvaliar,
    diariaConfirmar,
    setDiariaConfirmar,
    confirmarDiaria,
    diariaAvaliar,
    setDiariaAvaliar,
    avaliarDiaria,
    diariaCancelar,
    setDiariaCancelar,
    cancelarDiaria,
    filtro,
    setFiltro,
    alterarFiltro,
  };
}
