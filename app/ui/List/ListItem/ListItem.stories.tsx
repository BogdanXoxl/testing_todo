import type { ComponentMeta, ComponentStory } from "@storybook/react";
// import { rest } from 'msw';
// import { findByRole, userEvent, within } from "@storybook/testing-library";
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
    // mock component actions
    // onArchiveTask: { action: "onArchiveTask" },
    // onTogglePinTask: { action: "onTogglePinTask" },
    // onEditTitle: { action: "onEditTitle" },
    // onDeleteTask: { action: "onDeleteTask" },
  },
} as ComponentMeta<typeof ListItemComponent>;

const Template: ComponentStory<typeof ListItemComponent> = (args) => (
  <ol className="flex flex-col gap-y-4">
    <ListItemComponent {...args} />
    <ListItemComponent {...args} postIcon={FiTrash2} />
    <ListItemComponent {...args}>
      <Checkbox />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis deleniti eius
      impedit praesentium quas.
    </ListItemComponent>
  </ol>
);

export const ListItem = Template.bind({});
ListItem.parameters = {
  // msw: {
  //   handlers: [
  //     // rest.get("/tasks", (req, res, ctx) => {
  //     //   return res(ctx.json(TaskListDefault.args));
  //     // }),
  //   ],
  // },
};
// ListItem.play = async ({ canvasElement }) => {
// const canvas = within(canvasElement);
// const getTask = (name) => canvas.findByRole("listitem", { name });
//
// // Find the task to pin
// const itemToPin = await getTask("Export logo");
//
// // Find the pin button
// const pinButton = await findByRole(itemToPin, "button", { name: "pin" });
//
// // Click the pin button
// await userEvent.click(pinButton);
//
// // Check that the pin button is now a unpin button
// const unpinButton = within(itemToPin).getByRole("button", { name: "unpin" });
// await expect(unpinButton).toBeInTheDocument();
// };
