import { memo, FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
  name: string;
};

/**
 * 設定済のボタンコンポーネント.
 */
export const ButtonItem: FC<Props> = memo(({ onClick, name }) => {
  return (
    <>
      <Button
        type="button"
        onClick={onClick}
        _focus={{ boxShadow: "none" }}
        backgroundColor="green.400"
        size="md"
        textColor="white"
        _hover={{ backgroundColor: "green.300" }}
      >
        {name}
      </Button>
    </>
  );
});
