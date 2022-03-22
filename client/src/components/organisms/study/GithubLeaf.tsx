import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GithubLeafType } from "../../../types/types";
import styled from "styled-components";

//GithubAPI用のクエリー
//userはキャッシュからID取得してそれぞれのGithubIDを記載
const query = gql`
  {
    user(login: "hiroki-yama-1118") {
      login
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

/**
 * Github草データを表示
 * @returns Github草データ
 */
export const GithubLeaf = () => {
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

  //取得したGithubデータを格納
  const [getData, setGetData] = useState<GithubLeafType>();

  //データをメソッドとして取得してきて、useEffectで更新させる
  useEffect(() => {
    (async () => {
      const { data, error, loading } = await client.query({
        query: query,
      });
      setGetData(data);
    })();
  }, []);

  return (
    <>
      <Box>GithubID :{getData && getData.user.login}</Box>
      <Box>
        年間のコミット数：
        {getData &&
          getData.user.contributionsCollection.contributionCalendar
            .totalContributions}
        回
      </Box>
      <Box mx="50px" my="20px">
        <Box w="20px">
          <Flex>
            {getData &&
              getData.user.contributionsCollection.contributionCalendar.weeks.map(
                (githubWeeks, index) => (
                  <div key={index}>
                    <_container>
                      {githubWeeks.contributionDays.map((data) => (
                        <div key={data.date}>
                          <Box
                            w="20px"
                            h="20px"
                            bg={data.color}
                            m="2px"
                            rounded="base"
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
    </>
  );
};

const _container = styled.span`
  flex-direction: column;
`;
