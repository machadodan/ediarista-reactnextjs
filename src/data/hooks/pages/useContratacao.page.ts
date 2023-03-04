import { useState } from "react";
import { useForm } from "react-hook-form";
import { NovaDiariaFormDataInterface } from "../../@types/FormInterface";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchemaService } from "../../services/FormSchemaService";

export default function useContratacao() {
  const [step, setStep] = useState(1),
    breadcrumbItems = ["Detalhes da diária", "Identificação", "Pagamento"],
    serviceForm = useForm<NovaDiariaFormDataInterface>(
      //parte de validacao campos
      {
        resolver: yupResolver(
          FormSchemaService.address().concat(FormSchemaService.detalheServico())
        ),      
    });

  function onServiceFormSubmit(data: NovaDiariaFormDataInterface) {
    console.log(data);
  }

  return { step, breadcrumbItems, serviceForm, onServiceFormSubmit };
}
