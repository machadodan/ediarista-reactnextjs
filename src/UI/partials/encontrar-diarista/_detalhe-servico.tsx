import React, { PropsWithChildren } from 'react';
import { AddressForm } from '../../components/inputs/UserForm/UserForm';

// import { Component } from './_detalheservico.styled';

const DetalheServico: React.FC<PropsWithChildren> = () => {
    return (
        <div>
            <AddressForm />
        </div>
    );
};

export default DetalheServico;