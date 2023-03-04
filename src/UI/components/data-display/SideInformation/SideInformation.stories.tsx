import { ComponentMeta, ComponentStory } from "@storybook/react";
import SideInformation from "./SideInformation";


export default {
    title: "data-display/SideInformation",
    component: SideInformation,
} as ComponentMeta<typeof SideInformation>;

const Template: ComponentStory<typeof SideInformation> = (args) => (
    <SideInformation {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Detalhes",
  items: [
    {
      title: "Tipo",
      descricao: ["Limpeza de rotina"],
      icon: "twf-check-circle",
    },
    {
      title: "Tamanho",
      descricao: ["3 comodos", "2 banheiros"],
      icon: "twf-check-circle",
    },
    {
      title: "Data",
      descricao: ["14/12/2022"],
      icon: "twf-check-circle",
    },
  ],
  footer: {
    text:'R$185,00',
    icon: 'twf-credit-card',
  },
};

export const NoIconNoFooter = Template.bind({});

NoIconNoFooter.args = {
  title: "Como funciona?",
  items: [
    {
      title: "1 - Cadastro",
      descricao: ["Voçê faz o cadastro e escolhe as cidades atendidas"],
    },
    {
      title: "2 - Receba Proposta",
      descricao: ["Voçê recebera os serviços por Email e notificações no celular"],
    },
    {
      title: "3 - Diária Agendada",
      descricao: ["Se seu perfil for escolhido pelo cliente voçê receberá a confirmação do agendamento"],
    },
  ],
};
