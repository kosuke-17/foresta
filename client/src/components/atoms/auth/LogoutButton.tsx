import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Center, SimpleGrid, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const LogoutButton: FC = memo(() => {
  const toast = useToast();
  const navigate = useNavigate();
  // クッキー
  const [, , removeCookie] = useCookies();
  const doLogout = () => {
    removeCookie("ForestaID");
    navigate("/login");
    toast({
      title: "ログアウトしました",
      position: "bottom-left",
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
