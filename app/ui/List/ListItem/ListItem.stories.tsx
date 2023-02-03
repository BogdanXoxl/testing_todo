import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

import { Checkbox } from "../../Checkbox";
import { ListItem as ListItemComponent } from "./ListItem";

export default {
  title: "UI/ListItem",
  component: ListItemComponent,
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
} as ComponentMeta<typeof ListItemComponent>;

const Template: ComponentStory<typeof ListItemComponent> = (args) => (
  <div className="flex flex-col gap-y-4">
    <ListItemComponent {...args} />
    <ListItemComponent {...args} postIcon={FiTrash2} />
    <ListItemComponent {...args}>
      <Checkbox />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis deleniti eius
      impedit praesentium quas.
    </ListItemComponent>
  </div>
);

export const ListItem = Template.bind({});
