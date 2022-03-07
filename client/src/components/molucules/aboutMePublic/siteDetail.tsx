import { memo, FC } from "react";
import { SiteType } from "../../../types/UserType";
import { Image } from "@chakra-ui/react";

type Props = {
  siteItem?: SiteType; //制作物のデータ
};

/**
 * 制作物詳細画面.
 */
export const SiteDetail: FC<Props> = memo(({ siteItem }) => {
  return (
    <>
      {siteItem && (
        <>
          {siteItem.title}
          {siteItem.description}
          <a href={siteItem.portfolioURL}>
            <Image
              src={siteItem.img}
              alt={siteItem.title}
              width="auto"
              maxH={200}
            />
          </a>
        </>
      )}
    </>
  );
});
