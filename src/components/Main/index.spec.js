import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Main>Content</Main>
    </MemoryRouter>
  );

describe("Main", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render content", () => {
    setup();
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });
});
