import { render, screen } from "@testing-library/react";

import TestComponent from "./TestComponent";

describe("Home", () => {
  it("renders", () => {
    render(<TestComponent />);
    const testComponent = screen.getByText(/test component/i);

    expect(testComponent).toBeInTheDocument();
  });
});
