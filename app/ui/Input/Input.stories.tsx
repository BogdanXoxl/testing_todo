import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Input as InputComponent } from "./Input";

export default {
  title: "UI/Input",
  component: InputComponent,
  argTypes: {},
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});
