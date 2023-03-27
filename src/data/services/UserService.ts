import axios from "axios";
import { UseFormReturn } from "react-hook-form";
import { ApiLinksInterface } from "../@types/ApiLinksInterface";
import { CadastroUserInterface } from "../@types/FormInterface";
import { UserInterface, UserType } from "../@types/UseInterface";
import { ApiService } from "./ApiService";
import { ObjectService } from "./ObjectService";
import { TextFormatService } from "./TextFormatService";

export const UserService = {
  async cadastar(
    user: UserInterface,
    UserType: UserType,
    link: ApiLinksInterface
  ): Promise<UserInterface | undefined> {
    ApiService.defaults.headers.common.Authorization = "";

    const telefone = TextFormatService.getNumbersFromText(user.telefone),
      cpf = TextFormatService.getNumbersFromText(user.cpf),
      nascimento = TextFormatService.dateToString(user.nascimento as Date),
      userData = ObjectService.jsonToFormData(
        {
        ...user,
        tipo_usuario: UserType,
        cpf,
        telefone,
        nascimento,
      }); 

    const response = await ApiService.request<UserInterface>({
      url: link.uri,
      method: link.type,
      data: userData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
  handleNewUserError(error: unknown, 
    form: UseFormReturn<CadastroUserInterface> 
    ) {
      if(axios.isAxiosError(error)){
        const errorList = error.response?.data as UserInterface | undefined

        if(errorList){
          if(errorList.cpf){
            form.setError("usuario.cpf", {
              type: "cadastrado",
              message: "CPF já cadastrado",
            });
          }
         if (errorList.email) {
           form.setError("usuario.email", {
             type: "cadastrado",
             message: "E-mail já cadastrado",
           });
         }
        }
      }
    },
};