import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CredenciaisInterface, LoginFormDataInterface } from "../../@types/FormInterface";
import { ExternalServiceContext } from "../../contexts/ExternalServiceContext";
import { UserContext } from "../../contexts/UserContext";
import { FormSchemaService } from "../../services/FormSchemaService";
import { LoginService } from "../../services/LoginService";

export default function useLogin() {
  const formMethods = useForm<LoginFormDataInterface<CredenciaisInterface>>({
    resolver: yupResolver(FormSchemaService.login()),
  }),
  [errorMessage, setErrorMessage] = useState(""),
  { userDispatch } = useContext(UserContext),
  { externalServicesState } = useContext(ExternalServiceContext);

  async function onSubmit(data: LoginFormDataInterface<CredenciaisInterface>) {
    setErrorMessage("");

    const loginSuccess =   await LoginService.login(data.login);
    if (loginSuccess) {
      const user = await LoginService.getUser();
      if (user) {
        userDispatch({ type: "SET_USER", payload: user });
        return;
      }
    }
    setErrorMessage("E-mail e/ou Senha inválidos");
  }

  return { formMethods, onSubmit, externalServicesState, errorMessage };
}