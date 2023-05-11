import { useFormContext } from "react-hook-form";
import { FormValues } from "../../../../../data/@types/forms/FormValue";
import TextField from "../../TextField/TextField";
import { FinancialData } from "../UserForm.styled";

export const FinancialForm = () => {
  const { register } = useFormContext<FormValues>();
  return (
  <FinancialData>
    <TextField
      label={"Chave Pix"}
      defaultValue={""}
      {...register("usuario.chave_pix", { minLength: 5 })}
    />
  </FinancialData>
  );
};

export default FinancialForm;
