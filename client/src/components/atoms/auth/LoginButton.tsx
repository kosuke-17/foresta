import React, { FC, memo } from "react";
import { Center, SimpleGrid } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

type Login = {
  doLogin: React.MouseEventHandler<HTMLButtonElement>;
};

export const LoginButton: FC<Login> = memo(({ doLogin }) => {
  return (
    <Center>
      <SimpleGrid columns={1}>
        <Button w={72} colorScheme="green" variant="solid" onClick={doLogin}>
          ログイン
        </Button>
      </SimpleGrid>
    </Center>
  );
});
