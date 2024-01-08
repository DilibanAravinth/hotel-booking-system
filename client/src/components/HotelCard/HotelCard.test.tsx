import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HotelCard from "./HotelCard";

describe("HotelCard Component", () => {
  it("should render with the props provided", () => {
    const props = {
      name: "Taj International",
      location: "Bangalore, India",
      price: 2500,
      imageUrl: "",
    };
    render(<HotelCard {...props} />);
    const heading = screen.getByText(props.name);
    expect(heading).toBeVisible();
  });
});
