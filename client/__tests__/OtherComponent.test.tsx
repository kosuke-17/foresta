/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AccordionContent } from "../src/components/molucules/AccordionContent";
import { ModalSet } from "../src/components/molucules/ModalSet";

/**
 * アコーディオンコンポーネントのテスト.
 */
describe("アコーディオンコンポーネント", () => {
  const dummyData = {
    title: "dummy title",
    content: <p>dummy content</p>,
    size: "lg",
  };

  it("Propsが表示される", () => {
    render(<AccordionContent {...dummyData} />);
    expect(screen.getByText("dummy title")).toBeInTheDocument();
    expect(screen.getByText("dummy content")).toBeInTheDocument();
  });
});

/**
 * モーダルコンポーネントのテスト.
 */
describe("モーダルコンポーネント", () => {
  const dummyData = {
    onClose: () => alert("モーダルをとじる"),
    isOpen: true,
    modalTitle: "dummy title",
    contents: <p>dummy contents</p>,
    closeBtnName: "dummy close btn",
    actionBtnArray: [
      { name: "dummy action btn", action: () => alert("action!") },
    ],
    //とじるボタンを押してメソッドが発動されるかどうか
  };

  it("Propsが表示される", () => {
    render(<ModalSet {...dummyData} />);
    expect(screen.getByText("dummy title")).toBeInTheDocument();
    expect(screen.getByText("dummy contents")).toBeInTheDocument();
    expect(screen.getByText("dummy close btn")).toBeInTheDocument();
    expect(screen.getByText("dummy action btn")).toBeInTheDocument();
    //メソッドのボタンを押してメソッドが発動されるかどうか
  });
});
