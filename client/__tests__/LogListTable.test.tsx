/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GetAllStudyStackQuery } from "../src/types/generated/graphql";
// import { StudyStack } from "../src/types/generated/graphql";
import { LogListTable } from "../src/components/molucules/stackList/LogListTable";

describe("更新情報リスト表示", () => {
  type NewType = {
    data: GetAllStudyStackQuery; //更新情報データ
    // data: StudyStack; //更新情報データ
    success: () => void; //データの更新
  };

  type Props = NewType;
  let dummyProps: Props;

  const logListData = {
    getAllStudyStack: Array<{
      id: "1";
      createdAt: "2022-02-02";
      skillTagId: "React";
      timeStack: 180;
      content: "理解した";
      userId: "2";
    }>(),
  };

  const successData = () => {
    alert("成功");
  };
  it("更新情報リストが表示されるか", () => {
    dummyProps = {
      data: logListData,
      success: successData,
    };

    render(<LogListTable {...dummyProps} />);
    expect(
      screen.getByText(dummyProps.data.getAllStudyStack[0].createdAt),
    ).toBeInTheDocument();
  });
});
