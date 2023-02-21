import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

describe("BookingPage", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render heading BookingPage", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1, name: /Reservations/ })).toBeInTheDocument();
  });

  it("should render the form successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render date input", () => {
    setup();
    const inputEl = screen.getByLabelText("Choose date");
    expect(inputEl).toBeInTheDocument();
  });

  it("should render time input", () => {
    setup();
    const inputEl = screen.getByLabelText("Choose time");
    expect(inputEl).toBeInTheDocument();
  });

  it("should render number of guests input", () => {
    setup();
    const inputEl = screen.getByLabelText("Number of guests");
    expect(inputEl).toBeInTheDocument();
  });

  it("should render occasion input", () => {
    setup();
    const inputEl = screen.getByLabelText("Occasion");
    expect(inputEl).toBeInTheDocument();
  });

  it("should render button", () => {
    setup();
    const buttonEl = screen.getByRole("button", { name: /on click/i });
    expect(buttonEl).toBeInTheDocument();
  });

  it("should render date error if date is not filled", async () => {
    setup();
    const buttonEl = screen.getByRole("button", { name: /on click/i });

    fireEvent.click(buttonEl);

    await waitFor(() => {
      expect(screen.getByText("Date is required")).toBeInTheDocument();
    });
  });

  it("should render guest error if it is filled with value less than 1 or  more than 10", async () => {
    setup();
    const inputEl = screen.getByLabelText("Number of guests");
    fireEvent.change(inputEl, { target: { value: 0 } });

    const buttonEl = screen.getByRole("button", { name: /on click/i });
    fireEvent.click(buttonEl);

    await waitFor(() => {
      expect(screen.getByText("Please enter value between 1 and 10")).toBeInTheDocument();
    });
  });
});
