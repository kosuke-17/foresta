import { memo, FC } from "react";

/**
 * 制作物詳細画面.
 */
export const SiteDetail: FC = memo(() => {
  return (
    <>
      詳細内容
      <a href="">画像</a>
      <div>使用技術</div>
      <div>
        URL: <a href="">url</a>
      </div>
    </>
  );
});
