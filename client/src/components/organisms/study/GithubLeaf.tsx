// import { useGithubLeaf } from "../../../hooks/study/useGithubleaf";

import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Button } from "@chakra-ui/react";

export const GithubLeaf = () => {
  const getGithubLeaf = async () => {
    const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
    // useGithubLeaf();

    const httpLink = createHttpLink({
      uri: "https://api.github.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${TOKEN}`,
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
      query: gql`
        {
          user(login: "hiroki-yama-1118") {
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
      `,
    });
    console.log(data);
  };

  return (
    <>
      <Button onClick={getGithubLeaf}>Github草</Button>
    </>
  );
};
