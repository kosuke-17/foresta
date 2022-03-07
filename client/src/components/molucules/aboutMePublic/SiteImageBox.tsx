import { memo, FC } from "react";
import { SiteImage } from "../../atoms/AboutMePublic/SiteImage";
import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";

type Props = {
  siteData: Array<{ siteName: string; imageUrl: string }>;
  onOpen?: (e: any) => void;
};

/**
 * 制作物一覧画面.
 */
export const SiteImageBox: FC<Props> = memo(({ siteData, onOpen }) => {
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
        <Flex gap={4} justifyContent="center">
          {siteData.map((siteItem, i) => (
            <div key={i}>
              <_SiteImage>
                <Flex direction="column">
                  <SiteImage
                    siteName={siteItem.siteName}
                    onOpen={onOpen}
                    imageUrl={siteItem.imageUrl}
                  />
                </Flex>
              </_SiteImage>
            </div>
          ))}
        </Flex>
      </Box>
    </>
  );
});

const _SiteImage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
