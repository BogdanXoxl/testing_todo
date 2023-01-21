import type { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import TestComponent from "./TestComponent";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "TestComponent",
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

const Template: ComponentStory<typeof TestComponent> = () => <TestComponent />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "TestComponent",
};
