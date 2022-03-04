import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { memo } from "react";
import { useGetAllStudyStackQuery } from "../../../types/generated/graphql";
import { LogListTable } from "../../molucules/stackList/LogListTable";
import { StudyListTable } from "../../molucules/stackList/StudyListTable";

export type StackList = {
  id: string | null | undefined;
  timeStack: number;
  skillTagId: string;
  content: string;
  createdAtStart: string;
  createdAtLast: string;
};

/**
 * 学習リスト/更新情報を表示する
 * @returns 学習リストと更新情報
 */
export const StackList = memo(() => {
  //userIdから学習記録データを取得する
  const { loading, data, error } = useGetAllStudyStackQuery({
    //仮のユーザーID
    variables: { userId: "621c795fea18ffdb80e66462" },
  });

  //学習リストの詳細内容一つ一つを格納する新しい配列を作成
  const timeStackDatas = new Array<number>(); //学習時間
  const skillTagIdtackDatas = new Array<string>(); //学習技術
  const createdAtStartDatas = new Array<string>(); //記録開始日
  const createdAtLastDatas = new Array<string>(); //最終記録日
  const contentDatas = new Array<string>(); //メモ内容
  const idDatas = new Array<string | null | undefined>(); //記録id
  //上記の記録データを格納する配列
  const stackSumList = new Array<StackList>();

  if (data) {
    //取得したデータを変数に格納
    //スプレッド構文で変数に格納しないと下でdeleteする際に元のオブジェクトにも影響が出てしまうためdeleteができない
    const stackDatas = [...data.getAllStudyStack];
    //記録データの数だけfor文を回す
    for (let i = 0; i < stackDatas.length; i++) {
      if (stackDatas[i]) {
        let stackAnswer = stackDatas[i].timeStack;
        const startDate = stackDatas[i].createdAt;
        let lastDate = stackDatas[i].createdAt;
        let contentAnswer = stackDatas[i].content;
        const idAnswer = stackDatas[i].id;
        //i番目とi+1番目のデータを比較
        for (let j = i + 1; j < stackDatas.length; j++) {
          if (stackDatas[j]) {
            //カテゴリ名が被っていた場合
            if (stackDatas[i].skillTagId === stackDatas[j].skillTagId) {
              //技術内容が被っていた場合に学習時間は足し、最終記録日とメモデータは上書きする
              stackAnswer = stackAnswer + stackDatas[j].timeStack;
              lastDate = stackDatas[j].createdAt;
              contentAnswer = stackDatas[j].content;
              //上書きした分のデータを次のfor文で反映させないように削除
              delete stackDatas[j];
            }
          }
        }
        //それぞれのデータを配列にプッシュする
        skillTagIdtackDatas.push(stackDatas[i].skillTagId);
        timeStackDatas.push(stackAnswer);
        createdAtStartDatas.push(startDate);
        createdAtLastDatas.push(lastDate);
        contentDatas.push(contentAnswer);
        idDatas.push(idAnswer);
      }
    }
    //まとめたデータをfor文で回して学習リスト表示用に変換
    for (let i = 0; i < skillTagIdtackDatas.length; i++) {
      stackSumList.push({
        id: idDatas[i],
        timeStack: timeStackDatas[i],
        skillTagId: skillTagIdtackDatas[i],
        content: contentDatas[i],
        createdAtStart: createdAtStartDatas[i],
        createdAtLast: createdAtLastDatas[i],
      });
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error!</p>;
  } else {
    return (
      <div>
        <Center>
          <Tabs
            isFitted
            isLazy
            variant="soft-rounded"
            colorScheme="green"
            width="container.xl"
          >
            <TabList>
              <Tab
                _focus={{ boxShadow: "none" }}
                _selected={{ color: "white", bg: "green.300" }}
                _hover={{ bg: "gray.300" }}
              >
                学習リスト
              </Tab>
              <Tab
                _focus={{ boxShadow: "none" }}
                _selected={{ color: "white", bg: "green.300" }}
                _hover={{ bg: "gray.300" }}
              >
                更新情報
              </Tab>
            </TabList>
            <TabPanels overflow="auto" height="250px">
              <TabPanel>
                <StudyListTable data={data} stackSumList={stackSumList} />
              </TabPanel>
              <TabPanel>
                <LogListTable data={data} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </div>
    );
  }
});
