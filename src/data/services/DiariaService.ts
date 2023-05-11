import { DiairiaStatus, TextColor } from "../@types/DiariaInterface";


export const DiariaService = {
getStatus(status: DiairiaStatus): {label: string; color: TextColor} {
  let label = "",
  color: TextColor = "success";

switch (status) {
  case DiairiaStatus.SEM_PAGAMENTO:
    label = "Pagamento recusado";
    color = "error";
    break;
  case DiairiaStatus.PAGO:
    label = "Paga";
    break;
  case DiairiaStatus.CONFIRMADO:
    label = "Confirmada";
    break;
  case DiairiaStatus.CONCLUIDO:
    label = "Aguardando avaliação";
    color = "warning";
    break;
  case DiairiaStatus.CANCELADO:
    label = "Cancelada";
    color = "error";
    break;
  case DiairiaStatus.AVALIADO:
    label = "Avaliada";
    break;
  case DiairiaStatus.TRANSFERIDO:
    label = "Finalizada";    
    break;
}  

  return {label, color};
},
};