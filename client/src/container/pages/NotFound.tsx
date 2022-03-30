import { AlertIcon } from "@primer/octicons-react";
import styled from "styled-components";

export const NotFound = () => {
  return (
    <>
      <_All>
        <_Title>404 This page could not be found.</_Title>

        <_NoPage>
          <AlertIcon size={24} />
          ページが見つかりません
        </_NoPage>

        <_MarginTop>下記の可能性があります</_MarginTop>
        <_ListUl>
          <li>存在しないURL</li>
          <li>情報が削除された</li>
          <li>情報が存在しない</li>
        </_ListUl>

        <_MarginTop>
          解決策:ヘッダーのメニューからページに飛んでください。
        </_MarginTop>
      </_All>
    </>
  );
};

const _All = styled.div`
  color: gray;
  margin-top: 2.5rem;
  margin-left: 3rem;
`;

const _Title = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

const _MarginTop = styled.div`
  margin-top: 2.5rem;
`;

const _ListUl = styled.div`
  margin-left: 10px;
`;

const _NoPage = styled.div`
  margin-top: 3px;
`;
