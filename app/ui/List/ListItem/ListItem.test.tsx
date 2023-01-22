import { render } from "@testing-library/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";

import { Checkbox } from "../../Checkbox";
import { ListItem } from "./ListItem";

describe("Test ListItem UI component", () => {
  it("Snapshot", () => {
    const view = render(
      <ListItem postIcon={FiTrash2}>
        <Checkbox checked />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis deleniti eius
        impedit praesentium quas.
      </ListItem>
    );
    expect(view).toMatchSnapshot();
  });
});
