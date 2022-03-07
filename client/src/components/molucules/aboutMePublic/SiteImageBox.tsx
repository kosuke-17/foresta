import { memo, FC } from "react";
import { Box } from "@chakra-ui/react";
import { SiteImage } from "../../atoms/AboutMePublic/SiteImage";

type Props = {
  //後で?外す
  imageUrl?: string;
  siteName: string;
  onOpen?: (e: any) => void;
};

/**
 * 制作物一覧画面.
 */
export const SiteImageBox: FC<Props> = memo(
  ({ imageUrl, siteName, onOpen }) => {
    return (
      <>
        <SiteImage
          siteName="ほげほげサイト"
          imageUrl={imageUrl}
          onOpen={onOpen}
        />
      </>
    );
  },
);
