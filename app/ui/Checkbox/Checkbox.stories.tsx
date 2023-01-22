import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Checkbox } from "./Checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
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
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
