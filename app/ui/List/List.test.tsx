import { render } from "@testing-library/react";

import { List } from "./List";

describe("Test List UI component", () => {
  it("Snapshot", () => {
    expect(render(<List>children</List>)).toMatchSnapshot();
  });
});
