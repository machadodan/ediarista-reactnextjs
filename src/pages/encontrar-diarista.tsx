import React from 'react';
import { GetStaticProps } from 'next';
import Contratacao from '../UI/partials/encontrar-diarista/_contratacao';
import useEncontrarDiarista from '../data/hooks/pages/useEncontrarDiarista.page';
import VerificarProfissionais from '../UI/partials/encontrar-diarista/_verificar-profissionais';
// import { Component } from '@styles/pages/encontrardiarista.styled';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Encontrar Diarista",
    },
  };
};

const EncontrarDiarista: React.FC = () => {
 const {podeContratar, setPodeContratar } = useEncontrarDiarista()
  return (
    <div>
      {!podeContratar ? (
        <VerificarProfissionais onContratacaoProfissional={()=> setPodeContratar(true)} 
        />
      ) : (
        <Contratacao />
      )}{" "}
    </div>
  );
    };

export default EncontrarDiarista;