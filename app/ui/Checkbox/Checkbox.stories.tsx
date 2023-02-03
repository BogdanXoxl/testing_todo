import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Checkbox as CheckboxComponent } from "./Checkbox";

export default {
  title: "UI/Checkbox",
  component: CheckboxComponent,
  argTypes: {
    checked: {
      type: "boolean",
      defaultValue: false,
    },
    className: {
      type: "string",
      control: false,
    },
  },
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
);

export const Checkbox = Template.bind({});
