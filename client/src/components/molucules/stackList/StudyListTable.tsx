import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { GetAllStudyStackQuery } from "../../../types/generated/graphql";
import { StackList } from "../../../hooks/study/useStackList";

type Props = {
  data: GetAllStudyStackQuery | undefined; //データベースから取得した記録データ
  stackSumList: Array<StackList>; //取得したデータをフロントで操作したデータ
};

/**
 * 学習記録リストを表示するテーブル
 */
export const StudyListTable: FC<Props> = memo((props) => {
  const { stackSumList } = props;
  return (
    <Table variant="simple" colorScheme="green">
      <TableCaption>学習の記録</TableCaption>
      <Thead>
        <Tr>
          <Th>技術内容</Th>
          <Th>学習時間(累計)</Th>
          <Th>開始日</Th>
          <Th>最終学習日</Th>
          <Th>メモ</Th>
        </Tr>
      </Thead>
      <Tbody>
        {stackSumList &&
          stackSumList.map((stackList) => (
            <Tr key={stackList.id}>
              <Td>{stackList.skillTagId}</Td>
              <Td>{stackList.timeStack}</Td>
              <Td>{stackList.createdAtStart}</Td>
              <Td>{stackList.createdAtLast}</Td>
              <Td>{stackList.content}</Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
});
