import React from "react";
import { FiTrash2 } from "react-icons/fi";

import { Checkbox, Input, List, ListItem } from "./ui";

function MainPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <List>
        <ListItem>
          <Checkbox />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis deleniti eius
          impedit praesentium quas.
        </ListItem>
        <ListItem postIcon={FiTrash2}>
          <Checkbox checked />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis deleniti eius
          impedit praesentium quas.
        </ListItem>
      </List>
      <Input placeholder={"Add todo"} />
    </div>
  );
}

export default MainPage;
