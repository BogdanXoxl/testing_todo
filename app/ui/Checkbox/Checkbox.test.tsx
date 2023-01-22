import { render } from "@testing-library/react";

import { Checkbox } from "./Checkbox";

describe("Test List UI component", () => {
  it("Snapshot", () => {
    expect(render(<Checkbox />)).toMatchSnapshot();
  });
});
