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
import styled from "styled-components";
import { getFormattedStackDate } from "../../../utils/methods";

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
    <Table size="md" variant="simple" colorScheme="green">
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
              <Td>
                {getFormattedStackDate(new Date(stackList.createdAtStart))}
              </Td>
              <Td>
                {getFormattedStackDate(new Date(stackList.createdAtLast))}
              </Td>
              <Td>
                <_Content>{stackList.content}</_Content>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
});

const _Content = styled.span`
  overflowx: hidden;
  white-space: nowrap;
`;
