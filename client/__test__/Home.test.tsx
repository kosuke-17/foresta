/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../../src/App";

describe("Rendering", () => {
  it("Should render hello text", () => {
    render(<App />); // Homeコンポーネントをレンダリング
    expect(screen.getByText("and save to reload.")).toBeInTheDocument();
  });
});
