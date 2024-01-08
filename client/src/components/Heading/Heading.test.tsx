import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading", () => {
  it("should render with the prop provided", () => {
    const title = "This is a title";
    render(<Heading title={title} />);
    const heading = screen.getByText(title);
    expect(heading).toBeVisible();
  });
});
