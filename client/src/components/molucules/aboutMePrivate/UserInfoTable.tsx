import { memo, FC } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  UnorderedList,
  ListItem,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import {
  SpecUserInfoSheet,
  useGetSheetByUserIdQuery,
} from "../../../types/generated/graphql";

/**
 * ユーザの基本情報テーブル.
 */
export const UserInfoTable: FC = memo(() => {
  //cookieからID取得
  const [cookies] = useCookies();

  /**
   * スペックシートユーザ基本情報取得.
   */
  const { data, loading, error } = useGetSheetByUserIdQuery({
    variables: {
      userId: cookies.ForestaID,
    },
  });
  const userData = data?.user.node.userInfo as SpecUserInfoSheet;

  //読み込み中時の表示
  if (loading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.400" />
      </Flex>
    );
  }
  //エラー時の表示
  if (error) {
    return <Flex justifyContent="center">Error</Flex>;
  }

  return (
    <>
      {userData && (
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
              <Td>{userData?.stuffID}</Td>
            </Tr>
            <Tr>
              <Td>年齢</Td>
              <Td>{userData?.age}歳</Td>
            </Tr>
            <Tr>
              <Td>性別</Td>
              <Td>{userData?.gender}</Td>
            </Tr>
            <Tr>
              <Td>最寄駅</Td>
              <Td>{userData?.nearestStation}</Td>
            </Tr>
            <Tr>
              <Td>稼働開始日</Td>
              <Td>{userData?.startWorkDate}</Td>
            </Tr>
            <Tr>
              <Td>エンジニア歴</Td>
              <Td>
                <Flex>
                  {userData?.seExpAmount + userData?.pgExpAmount}
                  <UnorderedList listStyleType="none" ml={10}>
                    <ListItem>
                      <_Content>SE経験:</_Content>
                      {userData?.seExpAmount}
                    </ListItem>
                    <ListItem>
                      <_Content>PG,作業員経験:</_Content>
                      {userData?.pgExpAmount}
                    </ListItem>
                  </UnorderedList>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>IT全体歴</Td>
              <Td>{userData?.itExpAmount}</Td>
            </Tr>
          </Tbody>
        </Table>
      )}
    </>
  );
});

//効いていない…
const _Content = styled.span`
  width: 100px;
`;
