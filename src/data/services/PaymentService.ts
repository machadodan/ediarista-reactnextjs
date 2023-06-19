import pagarme, {CardInterface, CardValidateInterface} from 'pagarme';
import { TextColor } from '../@types/DiariaInterface';
import { PagamentoStatus } from '../@types/PagamentosInterface';

const encryption_key = process.env.NEXT_PUBLIC_PAGARME_ENCRYPTION_KEY;

export const PaymentService = {
  validate(card: CardInterface): CardValidateInterface {
    return pagarme.validate({ card }).card;
  },
  getHash(card: CardInterface): Promise<string> {
    return pagarme.client
    .connect({ encryption_key })
    .then((client)=> client.security.encrypt(card));
   
  },

  getStatus(status: PagamentoStatus): {label: string; color: TextColor} {
  let label = "",
  color: TextColor = "success";

switch (status) {
  case PagamentoStatus.Aguardando_Transferencia:
    label = "Aguardando Transferencia";
    color = "warning";
    break;
  case PagamentoStatus.Pago:
    label = "Paga";
    break;  
  }  

    return {label, color};
  },
};




