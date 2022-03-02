import {
  Button,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { memo } from "react";
import { useGetAllStudyStackByUserIdQuery } from "../../../types/generated/graphql";

/**
 * 更新情報を表示するテーブル
 * @returns 更新情報テーブル
 */
export const LogListTable = memo(() => {
  //userIdから学習記録データを取得する
  const { loading, data, error } = useGetAllStudyStackByUserIdQuery({
    //仮のユーザーID
    variables: { userId: "621c795fea18ffdb80e66462" },
  });
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error!</p>;
  } else {
    return (
      <Table variant="striped" colorScheme="green">
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
            data.getAllStudyStackByUserId.map((stackList) => (
              <Tr key={stackList.id}>
                <Td>{stackList.createdAt}</Td>
                <Td>{stackList.skillTagId}</Td>
                <Td>{stackList.timeStack}分</Td>
                <Td>
                  <Button colorScheme="green" size="sm">
                    編集
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="green" variant="outline" size="sm">
                    削除
                  </Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    );
  }
});
