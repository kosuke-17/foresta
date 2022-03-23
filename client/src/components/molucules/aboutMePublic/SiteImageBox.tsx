import { memo, FC, useState, MouseEvent } from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useCookies } from "react-cookie";

import { SiteDetail } from "./SiteDetail";
import { ModalSet } from "../../molucules/ModalSet";
import { SiteImage } from "../../atoms/aboutMePublic/SiteImage";
import { useModal } from "../../../hooks/useModal";
import { useGetUserPortfolioByIdQuery } from "../../../types/generated/graphql";
import { PortfolioType } from "../../../types/types";
import { XCircleFillIcon } from "@primer/octicons-react";

/**
 * 制作物一覧画面.
 */
export const SiteImageBox: FC = memo(() => {
  //cookieからID取得
  const [cookies] = useCookies();
  const { data, loading, error } = useGetUserPortfolioByIdQuery({
    variables: {
      userToken: cookies.ForestaID,
    },
  });
  const portfolioData = data?.portfolios.node.portfolio as Array<PortfolioType>;

  //モーダル使用のhooks
  const modalStore = useModal();
  const { onOpen, isOpen, onClose } = modalStore;
  const [portfolioItem, setPortfolioItem] = useState<PortfolioType>();

  /**
   *モーダルを開く.
   * @param e 親への伝搬を防ぐため渡す
   * @param item - 制作物データ
   */
  const openModal = (e: MouseEvent, item: PortfolioType) => {
    setPortfolioItem(item);
    onOpen(e);
  };

  //読み込み中時の表示
  if (loading) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.400" />
      </Flex>
    );
  }
  //エラー時の表示
  if (error) {
    return <Flex justifyContent="center">Error</Flex>;
  }
  //制作物の登録が0の時の表示
  if (portfolioData?.length === 0) {
    return (
      <Flex justifyContent="center">
        <XCircleFillIcon size={24} />
        制作物の登録がありません
      </Flex>
    );
  }

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
          modalTitle={portfolioItem?.title}
          contents={<SiteDetail siteItem={portfolioItem} />}
          closeBtnName="とじる"
        />
        <Flex gap={4} justifyContent="center" wrap="wrap-reverse">
          {portfolioData &&
            portfolioData.map((item) => (
              <div key={item.id}>
                <Flex
                  direction="column"
                  cursor="pointer"
                  outline="none"
                  onClick={(e) => openModal(e, item)}
                >
                  <SiteImage siteName={item.title} imageUrl={item.img} />
                </Flex>
              </div>
            ))}
        </Flex>
      </Box>
    </>
  );
});
