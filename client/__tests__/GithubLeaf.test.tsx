/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/react-testing";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import { GithubLeaf } from "../src/components/organisms/study/GithubLeaf";
import fetch from "cross-fetch";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const mocks = [];

describe("Github草画面表示", () => {
  it("Github草画面が表示され、取得したデータが正しく表示されるか", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <GithubLeaf />
      </MockedProvider>,
    );
  });
});
