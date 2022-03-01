import {
  Button,
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

export const StackList = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>学習リスト</Tab>
          <Tab>更新情報</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Table variant="striped" colorScheme="green">
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
                <Tr>
                  <Td>React</Td>
                  <Td>1時間40分</Td>
                  <Td>2022/1/2</Td>
                  <Td>2022/2/2</Td>
                  <Td>hooks理解した</Td>
                </Tr>
                <Tr>
                  <Td>Vue</Td>
                  <Td>1時間</Td>
                  <Td>2022/1/20</Td>
                  <Td>2022/2/20</Td>
                  <Td>Vuex理解した</Td>
                </Tr>
                <Tr>
                  <Td>TypeScript</Td>
                  <Td>3時間</Td>
                  <Td>2021/10/20</Td>
                  <Td>2022/2/20</Td>
                  <Td>型定義理解した</Td>
                </Tr>
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
