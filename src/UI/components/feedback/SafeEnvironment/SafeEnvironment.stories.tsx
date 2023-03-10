import { ComponentMeta, ComponentStory } from "@storybook/react";
import SafeEnvironment from "./SafeEnvironment";


export default {
    title: "feedback/SafeEnvironment",

} as ComponentMeta<typeof SafeEnvironment>;

const Template: ComponentStory<typeof SafeEnvironment> = (args) => {
    return <SafeEnvironment />;
};

export const Default = Template.bind({});

Default.args = {};
