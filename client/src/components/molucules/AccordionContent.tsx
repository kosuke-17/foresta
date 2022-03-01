import { memo, FC } from "react";
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
  content: any;
};

export const AccordionContent: FC<Props> = memo((props) => {
  const { title, content } = props;

  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem outlineOffset={0}>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold" fontSize={30}>
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>{content}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
});
