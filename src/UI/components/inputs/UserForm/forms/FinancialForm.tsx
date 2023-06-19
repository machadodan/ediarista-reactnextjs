import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../../../../../data/@types/forms/FormValue";
import { UserContext } from "../../../../../data/contexts/UserContext";
import TextField from "../../TextField/TextField";
import { FinancialData } from "../UserForm.styled";

export const FinancialForm = () => {
  const { register } = useFormContext<FormValues>(),
  {
    userState: { user },
} = useContext(UserContext)
  return (
  <FinancialData>
    <TextField
      label={"Chave Pix"}
      defaultValue={user.chave_pix}
      {...register("usuario.chave_pix", { minLength: 5 })}
    />
  </FinancialData>
  );
};

export default FinancialForm;
