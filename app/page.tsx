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

// TODO:: pre-commit
// TODO:: check github ci/cd
// TODO:: add addons
// TODO:: architecture lecture
// TODO:: components with view and logic separation

// TODO:: create components
// TODO:: create tests

// TODO:: add apollo
// TODO:: create app

// TODO:: add mocking server to sb
// TODO:: add cypress
// TODO:: remove jest if it unnecessary
// TODO:: deploy sb

// TODO:: add Go backend with GQL
// TODO:: add auth
