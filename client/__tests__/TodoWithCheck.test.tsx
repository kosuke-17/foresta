/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TodoWithCheck } from "../src/components/molucules/TodoWithCheck";

describe("Rendering", () => {
  // ダミーProps
  const dummyTodo = {
    id: "aaa",
    title: "dummytitle",
    startedAt: "2022-03-10",
    finishedAt: "2022-03-11",
    isStatus: true,
  };
  it("Should render hello text", () => {
    render(<TodoWithCheck {...dummyTodo} />);
    expect(screen.getByText("dummytitle")).toBeInTheDocument();
  });
});
