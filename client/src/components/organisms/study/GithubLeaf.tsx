import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GithubLeafType } from "../../../types/types";
import styled from "styled-components";

//GithubAPI用のクエリー
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
      <Box>
        {getData &&
          getData.user.contributionsCollection.contributionCalendar.weeks.map(
            (githubWeeks, index) => (
              <div key={index}>
                {githubWeeks.contributionDays.map((data) => (
                  <div key={data.date}>
                    <Wrap>
                      {data.date}：コミット数
                      {data.contributionCount}
                      <Box w="20px" h="20px" bg={data.color} />
                    </Wrap>
                  </div>
                ))}
              </div>
            ),
          )}
      </Box>
    </>
  );
};

// const _square = styled.span`
//   width: 200px;
//   height: 200px;
//   background: #0099cc;
//   color: #0099cc;
// `;
