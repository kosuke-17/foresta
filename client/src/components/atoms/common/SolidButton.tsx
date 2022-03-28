import { memo, FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
  name: string | ReactNode; 
  backgroundColor?: "green" | "red" | "gray"; // 背景の色
};

/**
 * variantがsolidのボタンコンポーネント.
 * @remarks
 * 背景色をgreenかredかgrayで指定してください。デフォルトはgreenです。
 */
export const SolidButton: FC<Props> = memo(
  ({ onClick, name, backgroundColor = "green" }) => {
    return (
      <>
        <Button
          type="button"
          onClick={onClick}
          size="md"
          textColor="white"
          backgroundColor={`${backgroundColor}.400`}
          _focus={{ boxShadow: "none" }}
          _hover={{ backgroundColor: `${backgroundColor}.300` }}
          _active={{ backgroundColor: `${backgroundColor}.200` }}
        >
          {name}
        </Button>
      </>
    );
  },
);
