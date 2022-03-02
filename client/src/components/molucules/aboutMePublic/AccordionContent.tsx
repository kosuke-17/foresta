import { memo, FC, ReactNode } from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

type Props = {
  title: string;
  content: ReactNode;
  size: string;
};

export const AccordionContent: FC<Props> = memo(({ title, content, size }) => {
  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem outlineOffset={0}>
          <AccordionButton _focus={{ boxShadow: "none" }}>
            {size === "lg" ? (
              <Box flex="1" textAlign="left" fontWeight="bold" fontSize={25}>
                {title}
              </Box>
            ) : (
              <Box flex="1" textAlign="left">
                {title}
              </Box>
            )}

            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>{content}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
});
