import { memo, FC, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Flex, Box } from "@chakra-ui/react";

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
              <Flex>
                {boxItems.map((item) => (
                  <div key={item}>
                    <Box
                      backgroundColor="gray.400"
                      borderRadius={5}
                      ml={2}
                      px={2}
                      py={1}
                      textColor="white"
                    >
                      {item}
                    </Box>
                  </div>
                ))}
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td>フレームワーク</Td>
            <Td>
              <Flex>
                {boxItems.map((item) => (
                  <div key={item}>
                    <Box
                      backgroundColor="gray.400"
                      borderRadius={5}
                      ml={2}
                      px={2}
                      py={1}
                      textColor="white"
                    >
                      {item}
                    </Box>
                  </div>
                ))}
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td>言語</Td>
            <Td>
              <Flex>
                {boxItems.map((item) => (
                  <div key={item}>
                    <Box
                      backgroundColor="gray.400"
                      borderRadius={5}
                      ml={2}
                      px={2}
                      py={1}
                      textColor="white"
                    >
                      {item}
                    </Box>
                  </div>
                ))}
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td>ライブラリ</Td>
            <Td>
              <Flex>
                {boxItems.map((item) => (
                  <div key={item}>
                    <Box
                      backgroundColor="gray.400"
                      borderRadius={5}
                      ml={2}
                      px={2}
                      py={1}
                      textColor="white"
                    >
                      {item}
                    </Box>
                  </div>
                ))}
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td>ツール・その他</Td>
            <Td>
              <Flex>
                {boxItems.map((item) => (
                  <div key={item}>
                    <Box
                      backgroundColor="gray.400"
                      borderRadius={5}
                      ml={2}
                      px={2}
                      py={1}
                      textColor="white"
                    >
                      {item}
                    </Box>
                  </div>
                ))}
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td>担当開発工程</Td>
            <Td>
              <Flex>
                {boxItems.map((item) => (
                  <div key={item}>
                    <Box
                      backgroundColor="gray.400"
                      borderRadius={5}
                      ml={2}
                      px={2}
                      py={1}
                      textColor="white"
                    >
                      {item}
                    </Box>
                  </div>
                ))}
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
});
