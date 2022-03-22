import React, { FC, memo } from "react";
import { useCookies } from "react-cookie";
import { Center, SimpleGrid, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const LogoutButton: FC = memo(() => {
  const toast = useToast();
  // クッキー
  const [, , removeCookie] = useCookies();
  const doLogout = () => {
    removeCookie("token");
    toast({
      title: "ログアウトしました",
      position: "top-right",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Center>
      <SimpleGrid columns={1}>
        <Button w={72} colorScheme="green" variant="solid" onClick={doLogout}>
          ログアウト
        </Button>
      </SimpleGrid>
    </Center>
  );
});
