import { memo, FC, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import { TextBox } from "./TextBox";
import { TableFlexItem } from "../../atoms/TableFlexItem";

/**
 * 開発経験.
 */
export const Project: FC = memo(() => {
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
            <Td>プロジェクト名</Td>
            <Td>ほげほげサイト</Td>
          </Tr>
          <Tr>
            <Td>期間</Td>
            <Td>0000ヵ月</Td>
          </Tr>
          <Tr>
            <Td>担当役割</Td>
            <Td>
              <TableFlexItem itemArray={boxItems} />
            </Td>
          </Tr>
          <Tr>
            <Td>チーム人数</Td>
            <Td>00</Td>
          </Tr>
          <Tr>
            <Td>動作環境(OS)</Td>
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
            <Td>フレームワーク</Td>
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
        </Tbody>
      </Table>
      <div>プロジェクト詳細</div>
      <TextBox />
    </>
  );
});
