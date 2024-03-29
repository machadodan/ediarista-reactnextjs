import { ComponentMeta, ComponentStory } from "@storybook/react";

import JobInformation from "./JobInformation";

export default {
  title: "data-display/JobInformation",
  component: JobInformation,
} as ComponentMeta<typeof JobInformation>;

const Template: ComponentStory<typeof JobInformation> = (args) => (
  <JobInformation {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <div>
      <div>
        Data: <strong>05/05/2023 às 08:00</strong>
      </div>
      <div>
        Valor: <strong>R$ 185,00</strong>
      </div>
      <div>
        Endereço: Av. Paulista, 100 - Centro, São Paulo
      </div>
    </div>
  ),
};