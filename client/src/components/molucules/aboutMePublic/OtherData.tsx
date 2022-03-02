import { memo, FC } from "react";
import styled from "styled-components";

/**
 * その他のデータ.
 * @remarks - 業務外、資格、前職について
 */
export const OtherData: FC = memo(() => {
  return (
    <>
      <_Title>業務外に取り組んでいること</_Title>
      <div>
        <div>項目名を入れたいな</div>
        <div>ほげほげほげほげほげほげほげほげほげほげほげほげほげほげ</div>
      </div>
      <div>
        <div>本を読んでいる</div>
        <div>ほげほげほげほげほげほげほげほげほげほげほげほげほげほげ</div>
      </div>
      <_Title>資格</_Title>
      <ul>
        <li>ITパスポート(0000/00)</li>
        <li>基本情報技術者試験(0000/00)</li>
        <li>色彩検定1級(0000/00)</li>
      </ul>
      <_Title>前職</_Title>
      <div>
        <div>業界</div>
        <div>ほげほげほげほげほげほげほげほげほげほげほげほげほげほげ</div>
      </div>
    </>
  );
});

//項目タイトル
const _Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 60px 0px 10px 0px;
`;
