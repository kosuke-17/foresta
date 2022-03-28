import { memo, FC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
  name: string | ReactNode;
  color?: "green" | "red" | "gray";
};

/**
 * variantがoutlineのボタンコンポーネント.
 * @remarks
 * 色をgreenかredかgrayで指定してください。デフォルトはgreenです。
 */
export const OutlineButton: FC<Props> = memo(
  ({ onClick, name, color = "green" }) => {
    return (
      <>
        <Button
          type="button"
          onClick={onClick}
          size="md"
          variant="outline"
          color={`${color}.400`}
          border="2px"
          borderColor={`${color}.400`}
          _focus={{ boxShadow: "none" }}
          _hover={{ backgroundColor: `${color}.100` }}
          _active={{ backgroundColor: `${color}.50` }}
        >
          {name}
        </Button>
      </>
    );
  },
);
