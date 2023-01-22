import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Input } from "./Input";

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
