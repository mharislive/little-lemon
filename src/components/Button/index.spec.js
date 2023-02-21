import { fireEvent, render, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button>Button</Button>);
    expect(baseElement).toBeInTheDocument();
  });

  it("should render button with correct type", () => {
    render(<Button type="submit">Button</Button>);
    expect(screen.getByText("Button")).toHaveAttribute("type", "submit");
  });

  it("should call provided onClick prop on button click", () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Button</Button>);
    fireEvent.click(screen.getByText("Button"));
    expect(mockOnClick).toBeCalled();
  });

  it("should render button with width 100% if fullWidth prop is provided", () => {
    render(<Button fullWidth>Button</Button>);
    expect(screen.getByText("Button")).toHaveStyle("width: 100%");
  });
});
