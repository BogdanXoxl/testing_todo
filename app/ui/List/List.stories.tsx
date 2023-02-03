import type { ComponentMeta, Story } from "@storybook/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

import { Checkbox } from "../Checkbox";
import { List as ListComponent } from "./List";
import { ListItem } from "./ListItem";

type ListProps = React.ComponentProps<typeof ListComponent>;

export default {
  title: "UI/List",
  component: ListComponent,
  argTypes: {
    className: {
      type: "string",
      control: false,
    },
    items_count: {
      type: "number",
      default: 0,
      control: {
        type: "number",
      },
    },
  },
} as ComponentMeta<typeof ListComponent>;

const Template: Story<ListProps & { items_count: number }> = (args) => (
  <ListComponent {...args}>
    {[...Array(args.items_count)].map((el) => (
      <ListItem key={el}>{el}list item children</ListItem>
    ))}
    <ListItem postIcon={FiTrash2}>list item children</ListItem>
    <ListItem>
      <Checkbox />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis deleniti eius
      impedit praesentium quas.
    </ListItem>
  </ListComponent>
);

export const List = Template.bind({});
