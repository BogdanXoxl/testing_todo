import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "./Input";

describe("Test Input UI component", () => {
  it("Test placeholder", () => {
    const placeholder = "placeholder";
    render(<Input placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it("Test onChange", async () => {
    const value = "value";
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<Input value={value} onChange={onChange} />);

    await user.keyboard("test");
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("Test enter key onClick", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<Input onClick={onClick} />);
    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    await user.keyboard("[Enter]");
    expect(onClick).toHaveBeenCalled();
  });

  it("Test button onClick", async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    render(<Input onClick={onClick} />);
    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    await user.click(btn);
    expect(onClick).toHaveBeenCalled();
  });
});
