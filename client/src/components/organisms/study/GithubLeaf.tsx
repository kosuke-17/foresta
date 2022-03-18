import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useEffect, useState } from "react";
import { GithubLeafType } from "../../../types/types";

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
      {getData &&
        getData.user.contributionsCollection.contributionCalendar
          .totalContributions}
    </>
  );
};
