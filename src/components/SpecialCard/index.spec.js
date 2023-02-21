import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SpecialCard from ".";

const setup = (props = {}) => {
  const { title = "title", price = "$10", image = "/images/logo.svg", description = "description" } = props;
  return render(
    <MemoryRouter>
      <SpecialCard title={title} price={price} image={image} description={description} />
    </MemoryRouter>
  );
};

describe("SpecialCard", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render the title", () => {
    setup();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });

  it("should render the price", () => {
    setup();
    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });

  it("should render the image", () => {
    setup();
    expect(screen.getByAltText(/title/i)).toBeInTheDocument();
  });

  it("should render the descrition", () => {
    setup();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });
});
