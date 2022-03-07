import { memo, FC, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { SiteDetail } from "./SiteDetail";
import { ModalSet } from "../../molucules/ModalSet";
import { SiteImage } from "../../atoms/AboutMePublic/SiteImage";
import { useModal } from "../../../hooks/useModal";
import { SiteType } from "../../../types/UserType";

type Props = {
  siteData: Array<SiteType>; //制作物のデータ
};

/**
 * 制作物一覧画面.
 */
export const SiteImageBox: FC<Props> = memo(({ siteData }) => {
  //モーダル使用のhooks
  const modalStore = useModal();
  const { onOpen, isOpen, onClose } = modalStore;
  const [siteItem, setSiteItem] = useState<SiteType>({
    title: "読み込み中",
    description: "",
    img: "",
    portfolioURL: "",
  });

  /**
   *モーダルを開く.
   * @param e 親への伝搬を防ぐため渡す
   * @param siteItem - 制作物データ
   */
  const openModal = (e: any, siteItem: SiteType) => {
    setSiteItem(siteItem);
    onOpen(e);
  };

  return (
    <>
      <Box backgroundColor="white" pb={10} mb={10}>
        <Box
          width="full"
          textAlign="center"
          textColor="white"
          backgroundColor="gray.400"
          fontWeight="bold"
          p={3}
          mt={5}
          fontSize={20}
        >
          制作物一覧
        </Box>
        <ModalSet
          isOpen={isOpen}
          onClose={onClose}
          modalTitle={siteItem?.title}
          contents={<SiteDetail siteItem={siteItem} />}
        />
        <Flex gap={4} justifyContent="center" wrap="wrap-reverse">
          {siteData.map((siteItem, i) => (
            <div key={i}>
              <Flex
                direction="column"
                cursor="pointer"
                onClick={(e) => openModal(e, siteItem)}
              >
                <SiteImage siteName={siteItem.title} imageUrl={siteItem.img} />
              </Flex>
            </div>
          ))}
        </Flex>
      </Box>
    </>
  );
});
