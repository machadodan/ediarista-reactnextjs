import { Button } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Table, { TableCell, TablePagination, TableProps, TableRow } from "./Table";

export default {
  title: "data-display/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <>
  <Table {...args} />
  <TablePagination count={10} />
  </>
);

export const Default = Template.bind({});

interface TemplatePropInterface {
  data: string;
  tipo: string;
  comodos: string;
  cidade: string;
}

Default.args = {
  header: ["Data", "Tipo de Serviço", "Número de cômodos", "Cidade", ""],
  data: [
    {
      data: "05/05/2023",
      tipo: "Limpeza de rotina",
      comodos: 4,
      cidade: "Campinas - SP",
    },
    {
      data: "05/04/2023",
      tipo: "Limpeza pesada",
      comodos: 2,
      cidade: "São Paulo - SP",
    },
    {
      data: "31/03/2023",
      tipo: "Limpeza pós obra",
      comodos: 3,
      cidade: "Valinhos - SP",
    },
  ] as unknown as TemplatePropInterface [],
  rowElement(_item, index) {
    const item = _item as TemplatePropInterface;
    return (
      <TableRow key={index}>
        <TableCell>
          <strong>{item.data}</strong>
        </TableCell>
        <TableCell>{item.tipo}</TableCell>
        <TableCell>{item.comodos} cômodos</TableCell>
        <TableCell>{item.cidade} </TableCell>

        <TableCell>
          <Button>Visualizar</Button>
        </TableCell>
      </TableRow>
    );
  },
};
