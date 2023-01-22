import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

import { Checkbox } from "../../Checkbox";
import { ListItem } from "./ListItem";

export default {
  title: "UI/ListItem",
  component: ListItem,
  argTypes: {
    className: {
      type: "string",
      control: false,
    },
    postIcon: {
      control: false,
    },
    children: {
      type: "string",
      defaultValue: "children",
    },
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <div className="flex flex-col gap-y-4">
    <ListItem {...args} />
    <ListItem {...args} postIcon={FiTrash2} />
    <ListItem {...args}>
      <Checkbox />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis deleniti eius
      impedit praesentium quas.
    </ListItem>
  </div>
);

export const Default = Template.bind({});
