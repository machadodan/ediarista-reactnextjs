import { useState } from "react";
import { useForm } from "react-hook-form";
import { CadastroClienteFormDataInterface, CredenciaisInterface, LoginFormDataInterface, NovaDiariaFormDataInterface, PagamentoFormDataInterface } from "../../@types/FormInterface";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaService } from "../../services/FormSchemaService";
import { ServicoInterface } from "../../@types/ServicoInterface";

export default function useContratacao() {
  const [step, setStep] = useState(1),
    [hasLogin, setHasLogin] = useState(false),
    [loginError, setLoginErro] = useState(""),
    breadcrumbItems = ["Detalhes da diária", "Identificação", "Pagamento"],
    serviceForm = useForm<NovaDiariaFormDataInterface>(
      //parte de validacao campos
      {
        resolver: yupResolver(
          FormSchemaService.address().concat(FormSchemaService.detalheServico())
        ),
      }
    ),
    clientForm = useForm<CadastroClienteFormDataInterface>(
      //parte de validacao campos
      {
        resolver: yupResolver(
          FormSchemaService.userData().concat(FormSchemaService.newContact())
        ),
      }
    ),
    loginForm = useForm<LoginFormDataInterface<CredenciaisInterface>>({
      //parte de validacao campos
      resolver: yupResolver(FormSchemaService.login()),
    }),
    paymentForm = useForm<PagamentoFormDataInterface>({
      //parte de validacao campos
      resolver: yupResolver(FormSchemaService.payment()),
    }),
    servicos: ServicoInterface[] = [
      {
        id: 0,
        nome: "Limpeza comum",
        icone: "twf-cleaning-1",
        horas_banheiro: 1,
        horas_cozinha: 1,
        horas_outros: 1,
        horas_quarto: 1,
        horas_quintal: 1,
        horas_sala: 1,
        porcentagem_comisao: 10,
        qtd_horas: 2,
        valor_banheiro: 20,
        valor_cozinha: 20,
        valor_minimo: 20,
        valor_outros: 20,
        valor_quarto: 20,
        valor_quintal: 20,
        valor_sala: 20,
      },
    ];

  function onServiceFormSubmit(data: NovaDiariaFormDataInterface) {
    console.log(data);
  }

  function onClientFormSubmit(data: CadastroClienteFormDataInterface) {
    console.log(data);
  }

  function onLoginFormSubmit(data: LoginFormDataInterface<CredenciaisInterface>) {
    console.log(data);
  }

   function onPaymentFormSubmit(data: PagamentoFormDataInterface) {
     console.log(data);
   }

  return {
    step,
    breadcrumbItems,
    serviceForm,
    onServiceFormSubmit,
    servicos,
    hasLogin,
    setHasLogin,
    clientForm,
    onClientFormSubmit,
    setStep,
    onLoginFormSubmit,
    loginForm,
    loginError,
    paymentForm,
    onPaymentFormSubmit,
  };
}
