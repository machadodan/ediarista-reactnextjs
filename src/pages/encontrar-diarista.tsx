import React from 'react';
import { GetStaticProps } from 'next';
import Contratacao from '../UI/partials/encontrar-diarista/_contratacao';
// import { Component } from '@styles/pages/encontrardiarista.styled';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Encontrar Diarista",
    },
  };
};

const EncontrarDiarista: React.FC = () => {
  // return <VerificarProfissionais />;
  return <Contratacao />;
};

export default EncontrarDiarista;