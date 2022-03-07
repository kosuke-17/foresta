import { memo, FC, useState } from "react";
import { SiteImage } from "../../atoms/AboutMePublic/SiteImage";
import { Box, Flex } from "@chakra-ui/react";
import { useModal } from "../../../hooks/useModal";
import { ModalSet } from "../../molucules/ModalSet";
import { SiteDetail } from "./SiteDetail";

type Props = {
  siteData: Array<{
    title: string;
    description: string;
    img: string;
    portfolioURL: string;
  }>;
};

/**
 * 制作物一覧画面.
 */
export const SiteImageBox: FC<Props> = memo(({ siteData }) => {
  const modalStore = useModal();
  const { onOpen, isOpen, onClose } = modalStore;
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (e: any, siteName: string) => {
    setModalTitle(siteName);
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
          modalTitle={modalTitle}
          contents={<SiteDetail />}
        />
        <Flex gap={4} justifyContent="center" wrap="wrap-reverse">
          {siteData.map((siteItem, i) => (
            <div key={i}>
              <Flex
                direction="column"
                cursor="pointer"
                onClick={(e) => openModal(e, siteItem.title)}
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
