import React, { ChangeEvent, PropsWithChildren, useState } from 'react';
import { TextFieldProps } from '@mui/material';
import { FileContainer, UploadIcon } from "./Filefield.styled";
import TextField from "../../../components/inputs/TextField/TextField";


export interface FilefieldProps extends Omit<TextFieldProps, "onChange"> {
  onChange: (files: FileList) => void;
}


const Filefield: React.FC<PropsWithChildren<FilefieldProps>> = ({
  onChange,
  ...props
}) => {
  const [filePath, setFilePath] = useState("");

  function handleFileChange(event: ChangeEvent) {
    const target = event.target as HTMLInputElement,
      files = target.files;

    if (files != null && files.length) {
      setFilePath(files[0]?.name ?? "");
      onChange(files);
    }
  }
  return (
    <FileContainer>
      <TextField
        label={"Selecione o arquivo"}
        value={filePath}
        InputProps={{ endAdornment: <UploadIcon className="twf-upload" /> }}
        {...props}
        fullWidth
      />
      <TextField
        type={"file"}
        {...props}
        fullWidth
        onChange={handleFileChange}
      />
    </FileContainer>
  );
};

    export default Filefield;