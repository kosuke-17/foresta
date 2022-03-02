import {
  Button,
  Center,
  Tab,
  Table,
  TableCaption,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { memo } from "react";
import { useGetAllStudyStackByUserIdQuery } from "../../../types/generated/graphql";

/**
 * 学習リスト/更新情報を表示する
 * @returns 学習リストと更新情報
 */
export const StackList = memo(() => {
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
      <div>
        <Center>
          <Tabs
            isFitted
            isLazy
            variant="soft-rounded"
            colorScheme="green"
            width="container.xl"
          >
            <TabList>
              <Tab
                _focus={{ boxShadow: "none" }}
                _selected={{ color: "white", bg: "green.300" }}
                _hover={{ bg: "gray.300" }}
              >
                学習リスト
              </Tab>
              <Tab
                _focus={{ boxShadow: "none" }}
                _selected={{ color: "white", bg: "green.300" }}
                _hover={{ bg: "gray.300" }}
              >
                更新情報
              </Tab>
            </TabList>
            <TabPanels overflow="auto" height="250px">
              <TabPanel>
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
                    {data &&
                      data.getAllStudyStackByUserId.map((stackList) => (
                        <Tr key={stackList.id}>
                          <Td>{stackList.skillTagId}</Td>
                          <Td>{stackList.timeStack}</Td>
                          <Td>{stackList.createdAt}</Td>
                          <Td>{stackList.createdAt}</Td>
                          <Td>{stackList.content}</Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel>
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
                            <Button
                              colorScheme="green"
                              variant="outline"
                              size="sm"
                            >
                              削除
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </div>
    );
  }
});
