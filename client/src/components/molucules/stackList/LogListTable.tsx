import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { FC, memo } from "react";
import { GetAllStudyStackQuery } from "../../../types/generated/graphql";
import { getFormattedStackDate } from "../../../utils/methods";
import { StudyModal } from "./StudyModal";

type Props = {
  data: GetAllStudyStackQuery | undefined; //データベースから取得した記録データ
};

/**
 * 記録情報テーブル
 */
export const LogListTable: FC<Props> = memo((props) => {
  const { data } = props;

  return (
    <Table variant="simple" colorScheme="green">
      <Thead>
        <Tr>
          <Th>記録日時</Th>
          <Th>技術内容</Th>
          <Th>学習時間</Th>
          <Th>編集ボタン</Th>
          <Th>削除ボタン</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data &&
          data.getAllStudyStack.node.map((stackList) => (
            <Tr key={stackList.id}>
              <Td>{getFormattedStackDate(new Date(stackList.createdAt))}</Td>
              <Td>{stackList.skillTagId}</Td>
              <Td>{stackList.timeStack}分</Td>
              <Td>
                <StudyModal
                  title="記録編集"
                  icon={<EditIcon />}
                  stackId={stackList.id}
                />
              </Td>
              <Td>
                <StudyModal
                  title="記録削除"
                  icon={<DeleteIcon />}
                  stackId={stackList.id}
                />
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
});
