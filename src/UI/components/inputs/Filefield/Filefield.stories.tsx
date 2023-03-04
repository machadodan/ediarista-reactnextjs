import { ComponentMeta, ComponentStory } from "@storybook/react";
import Filefield from "./Filefield";


export default {
    title: "inputs/Filefield",
    component: Filefield,
} as ComponentMeta<typeof Filefield>;

const Template: ComponentStory<typeof Filefield> = (args) => (
    <Filefield {...args} />
);

export const Default = Template.bind({});

Default.args = {};

