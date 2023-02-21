import { render, screen } from "@testing-library/react";
import Container from ".";

describe("Container", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Container>Container</Container>);
    expect(baseElement).toBeInTheDocument();
  });

  it("should render successfully with provided className", () => {
    render(<Container className="test">Container</Container>);
    expect(screen.getByText("Container")).toHaveClass("test");
  });
});
