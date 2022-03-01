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

/**
 * 更新情報を表示するテーブル
 * @returns 更新情報テーブル
 */
export const LogListTable = () => {
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
        <Tr>
          <Td>2022/2/2</Td>
          <Td>React</Td>
          <Td>1時間</Td>
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
        <Tr>
          <Td>2022/1/2</Td>
          <Td>React</Td>
          <Td>40分</Td>
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
        <Tr>
          <Td>2022/2/20</Td>
          <Td>Vue</Td>
          <Td>1時間</Td>
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
      </Tbody>
    </Table>
  );
};
