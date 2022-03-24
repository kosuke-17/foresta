import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import { GithubLeafType } from "../../../types/types";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useGetUserByIdQuery } from "../../../types/generated/graphql";

//GithubAPI用のクエリー
const query = gql`
  query ($githubUrl: String!) {
    user(login: $githubUrl) {
      login
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

/**
 * Github草データを表示
 * @returns Github草データ.
 */
export const GithubLeaf = memo(() => {
  //クッキーからユーザーID取得
  const [cookies] = useCookies();

  //ユーザーIDからGithubURL取得
  const { data: githubDatas } = useGetUserByIdQuery({
    //Githubデータ取得
    variables: { userToken: cookies.ForestaID },
  });

  //取得したGithubURLを格納する
  const getGithubUrl = githubDatas?.user.node.githubURL;

  //GithubAPIのアクセスするためのトークン
  const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  //GithubAPIのリンク
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  //Linkのheadersにトークン埋め込み、認証
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${TOKEN}`,
      },
    };
  });

  //新たにGithubAPI用のアポロクライアント作成
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  //取得したGithubデータを表示用配列に格納
  const [getData, setGetData] = useState<GithubLeafType>();

  //データをメソッドとして取得してきて、useEffectで更新させる
  useEffect(() => {
    (async () => {
      console.log(getGithubUrl);
      const { data } = await client.query({
        variables: { githubUrl: getGithubUrl },
        query: query,
      });
      setGetData(data);
    })();
  }, [getGithubUrl]);

  return (
    <>
      <Heading as="h2" size="lg" mr={3} ml={5} mt={5}>
        Github草図
      </Heading>
      <Box backgroundColor="#f5f5f5" p={5} mr={5} ml={5}>
        <Box>
          <Box>GithubID :{getData && getData.user.login}</Box>
          年間のコミット数：
          {getData &&
            getData.user.contributionsCollection.contributionCalendar
              .totalContributions}
          回
        </Box>

        <Box mx="70px" my="20px" backgroundColor="white" p={5}>
          <Box w="15px">
            <Flex>
              {getData &&
                getData.user.contributionsCollection.contributionCalendar.weeks.map(
                  (githubWeeks, index) => (
                    <div key={index}>
                      <_container>
                        {githubWeeks.contributionDays.map((data) => (
                          <div key={data.date}>
                            <Box
                              w="15px"
                              h="15px"
                              bg={data.color}
                              m="2px"
                              rounded="base"
                              _hover={{
                                background: "white",
                              }}
                            />
                          </div>
                        ))}
                      </_container>
                    </div>
                  ),
                )}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
});

const _container = styled.span`
  flex-direction: column;
`;
