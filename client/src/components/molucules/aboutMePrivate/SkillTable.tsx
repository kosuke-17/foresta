import { memo, FC, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import { TableFlexItem } from "../../atoms/AboutMePublic/TableFlexItem";

/**
 * スキル要約.
 */
export const SkillTable: FC = memo(() => {
  //テストデータ
  const [boxItems] = useState(["Windows", "Mac", "Linux"]);

  return (
    <>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>項目名</Th>
            <Th>内容</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>動作環境(OS)</Td>
            <Td>
              <TableFlexItem itemArray={boxItems} />
            </Td>
          </Tr>
          <Tr>
            <Td>フレームワーク</Td>
            <Td>
              <TableFlexItem itemArray={boxItems} />
            </Td>
          </Tr>
          <Tr>
            <Td>言語</Td>
            <Td>
              <TableFlexItem itemArray={boxItems} />
            </Td>
          </Tr>
          <Tr>
            <Td>ライブラリ</Td>
            <Td>
              <TableFlexItem itemArray={boxItems} />
            </Td>
          </Tr>
          <Tr>
            <Td>ツール・その他</Td>
            <Td>
              <TableFlexItem itemArray={boxItems} />
            </Td>
          </Tr>
          <Tr>
            <Td>担当開発工程</Td>
            <Td>
              <TableFlexItem itemArray={boxItems} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
});
