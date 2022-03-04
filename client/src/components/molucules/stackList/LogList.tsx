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
import { StudyModal } from "../StudyModal";

type Props = {
  data: GetAllStudyStackQuery | undefined;
};

export const LogList: FC<Props> = memo((props) => {
  const { data } = props;

  return (
    <Table variant="simple" colorScheme="green">
      <TableCaption>更新情報</TableCaption>
      <Thead>
        <Tr>
          <Th>記録日時</Th>
          <Th>技術内容</Th>
          <Th>学習時間</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {data &&
          data.getAllStudyStack.map((stackList) => (
            <Tr key={stackList.id}>
              <Td>{stackList.createdAt}</Td>
              <Td>{stackList.skillTagId}</Td>
              <Td>{stackList.timeStack}分</Td>
              <Td>
                <StudyModal title="記録編集" buttonTitle="編集" />
              </Td>
              <Td>
                <StudyModal title="記録削除" buttonTitle="削除" />
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
});
