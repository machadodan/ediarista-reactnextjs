import { Paper } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { FormProvider } from "react-hook-form";
import useContratacao from "../../../data/hooks/pages/useContratacao.page";
import useIsMobile from "../../../data/hooks/useIsMobile";
import PageTitle from "../../components/data-display/PageTitle/PageTitle";
import SideInformation from "../../components/data-display/SideInformation/SideInformation";
import SafeEnvironment from "../../components/feedback/SafeEnvironment/SafeEnvironment";
import {
  UserFormContainer,
  PageFormContainer,
} from "../../components/inputs/UserForm/UserForm";
import BreadCrumb from "../../components/navigation/BreadCrumb/BreadCrumb";
import DetalheServico from "./_detalhe-servico";

// import { Component } from './_contratacao.styled';

const Contratacao: React.FC<PropsWithChildren> = () => {
  const { step, breadcrumbItems, serviceForm, onServiceFormSubmit } = useContratacao();
  const isMobile = useIsMobile();
  return (
    <div>
      {!isMobile && <SafeEnvironment />}
      <BreadCrumb
        selected={breadcrumbItems[step - 1]}
        items={breadcrumbItems}
      />
      {step === 1 && <PageTitle title="Nos conte um pouco sobre o serviço!" />}
      <UserFormContainer>
        <PageFormContainer>
          <Paper>
            <FormProvider {...serviceForm}>
              <form
                onSubmit={serviceForm.handleSubmit(onServiceFormSubmit)}
                hidden={step !== 1}
              >
              <DetalheServico />
              </form>
            </FormProvider>
          </Paper>
          {!isMobile && step !== 4 && (
            <SideInformation
              title="Detalhes"
              items={[
                {
                  title: "Tipo",
                  descricao: [""],
                  icon: "twf-check-circle",
                },
                {
                  title: "Tamanho",
                  descricao: [""],
                  icon: "twf-check-circle",
                },
                {
                  title: "Data",
                  descricao: [""],
                  icon: "twf-check-circle",
                },
              ]}
              footer={{
                text: "R$80,00",
                icon: "twf-credit-card",
              }}
            />
          )}
        </PageFormContainer>
      </UserFormContainer>
    </div>
  );
};

export default Contratacao;
