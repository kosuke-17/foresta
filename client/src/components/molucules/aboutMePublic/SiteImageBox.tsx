import { memo, FC, useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import styled from "styled-components";

import { SiteDetail } from "./SiteDetail";
import { ModalSet } from "../../molucules/ModalSet";
import { SiteImage } from "../../atoms/AboutMePublic/SiteImage";
import { useModal } from "../../../hooks/useModal";
import { Portfolio } from "../../../types/generated/graphql";

// 自動生成したPortfolioの型から使用したいプロパティ名だけを指定
type Props = {
  siteData: Array<
    Pick<Portfolio, "title" | "description" | "img" | "portfolioURL">
  >;
};

/**
 * 制作物一覧画面.
 */
export const SiteImageBox: FC<Props> = memo(({ siteData }) => {
  //モーダル使用のhooks
  const modalStore = useModal();
  const { onOpen, isOpen, onClose } = modalStore;
  const [siteItem, setSiteItem] =
    useState<
      Pick<Portfolio, "title" | "description" | "img" | "portfolioURL">
    >();

  /**
   *モーダルを開く.
   * @param e 親への伝搬を防ぐため渡す
   * @param siteItem - 制作物データ
   */
  const openModal = (
    e: any,
    siteItem: Pick<Portfolio, "title" | "description" | "img" | "portfolioURL">,
  ) => {
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
          <Flex alignItems="center" justifyContent="right">
            <_Title>制作物一覧</_Title>

            <_Btn>
              <Button
                backgroundColor="green.400"
                size="md"
                textColor="white"
                width={200}
                _hover={{ backgroundColor: "green.300" }}
              >
                制作物を追加
              </Button>
            </_Btn>
          </Flex>
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

//制作物一覧の文字
const _Title = styled.div`
  margin: 0 auto 0 45%;
`;

const _Btn = styled.div`
  justify-content: right;
`;
