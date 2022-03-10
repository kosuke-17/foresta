/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GetAllStudyStackDocument } from "../src/types/generated/graphql";
// import { LogListTable } from "../src/components/molucules/stackList/LogListTable";
import { StackList } from "../src/components/organisms/study/StackList";
import { MockedProvider } from "@apollo/react-testing";
import userEvent from "@testing-library/user-event";

const mocks = [
  {
    request: {
      query: GetAllStudyStackDocument,
    },
    result: {
      data: {
        stacks: [
          {
            id: "1",
            createdAt: "2022-02-02",
            skillTagId: "React",
            timeStack: 180,
            content: "理解した",
            userId: "2",
          },
          {
            id: "2",
            createdAt: "2022-02-04",
            skillTagId: "Vue",
            timeStack: 200,
            content: "わかった",
            userId: "3",
          },
        ],
      },
    },
  },
];

describe("学習リスト画面表示", () => {
  // type NewType = {
  //   data: GetAllStudyStackQuery; //更新情報データ
  //   // data: StudyStack; //更新情報データ
  //   success: () => void; //データの更新
  // };

  // type Props = NewType;
  // let dummyProps: Props;

  // const logListData = {
  //   getAllStudyStack: Array<{
  //     id: "1";
  //     createdAt: "2022-02-02";
  //     skillTagId: "React";
  //     timeStack: 180;
  //     content: "理解した";
  //     userId: "2";
  //   }>(),
  // };

  // const successData = () => {
  //   alert("成功");
  // };
  it("学習リスト画面が表示されるか", () => {
    // dummyProps = {
    //   data: logListData,
    //   success: successData,
    // };

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {/* <LogListTable {...dummyProps} /> */}
        <StackList />
      </MockedProvider>,
    );
    expect(screen.getByText("学習リスト")).toBeInTheDocument();
    userEvent.click(screen.getByText("更新情報"));
  });
});
