import React, { PropsWithChildren } from 'react';
// import {} from '@mui/material';
import {BreadContainer, BreadCrumbItem } from './BreadCrumb.styled'

export interface BreadCrumbProps {
  items: string[];
  selected: string;
}

const BreadCrumb: React.FC<PropsWithChildren<BreadCrumbProps>> = ({ 
  items,
  selected,
 }) => {
  return (
    <BreadContainer>
      {items.map((item) => (
        <React.Fragment key={item}>
          <BreadCrumbItem isSelected={selected === item}>{item}</BreadCrumbItem>
          <span>&gt;</span>
        </React.Fragment>
      ))}
    </BreadContainer>
  );
};

    export default BreadCrumb;