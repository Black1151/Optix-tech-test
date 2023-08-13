import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Loading } from "../Loading";

describe("Loading", () => {
  test("renders without crashing", () => {
    render(<Loading />);
  });

  test("displays the CircularProgress component", () => {
    render(<Loading />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
