import { memo, FC } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export const UserInfoTable: FC = memo(() => {
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
            <Td>スタッフID</Td>
            <Td>0000</Td>
          </Tr>
          <Tr>
            <Td>年齢</Td>
            <Td>00歳</Td>
          </Tr>
          <Tr>
            <Td>性別</Td>
            <Td>女</Td>
          </Tr>
          <Tr>
            <Td>最寄駅</Td>
            <Td>ほげほげ駅(ほげほげ線)</Td>
          </Tr>
          <Tr>
            <Td>稼働開始日</Td>
            <Td>応相談</Td>
          </Tr>
          <Tr>
            <Td>エンジニア歴</Td>
            <Td>
              0年0ヵ月
              <ul>
                <li>SE経験:0年0ヵ月</li>
                <li>PG/作業員経験:0年0ヵ月</li>
              </ul>
            </Td>
          </Tr>
          <Tr>
            <Td>IT全体歴</Td>
            <Td>0年0ヵ月</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
});
