import { FC, memo, useState, ChangeEvent } from "react";
import { useCookies } from "react-cookie";
import { EmailInput } from "../../atoms/auth/EmailInput";
import { PasswordInput } from "../../atoms/auth/PasswordInput";
import { LoginButton } from "../../atoms/auth/LoginButton";
import { useUserLoginMutation } from "../../../types/generated/graphql";
import { Center, Box, SimpleGrid } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginForm: FC = memo(() => {
  // ログイン通知用のトースト
  const toast = useToast();
  // 画面遷移用のnavigate
  const navigate = useNavigate();
  // クッキー
  const [, setCookie] = useCookies();
  // メールアドレス
  const [mailAddress, setMailAddress] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangeMailAddress = (e: ChangeEvent<HTMLInputElement>) =>
    setMailAddress(e.target.value);
  // パスワード
  const [password, setPassword] = useState<string>("");
  // テキストボックス入力時に入力内容をStateに設定
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const [userLoginMutation] = useUserLoginMutation({
    variables: {
      user: {
        email: mailAddress,
        password: password,
      },
    },
  });

  // ログイン処理
  const doLogin = async () => {
    try {
      const response = await userLoginMutation();
      console.log(response);
      // ログインが成功した場合はCookieにForestaIDを保存
      if (response.data?.userLogin.status == "success") {
        setCookie("ForestaID", response.data.userLogin.node.id);
        toast({
          title: "ログインに成功しました",
          position: "bottom-left",
          status: "success",
          isClosable: true,
        });
        navigate("/");
      }
    } catch {
      toast({
        title: "このユーザーは存在しません",
        position: "bottom-left",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Box h="600px" display="flex" justifyContent="center" bg="white">
        <Center>
          <Box
            w={80}
            h="310px"
            color="gray"
            borderWidth="1px"
            borderRadius="lg"
            bg="gray.50"
          >
            <SimpleGrid columns={1} spacing={8}>
              <EmailInput
                value={mailAddress}
                onChange={(e) => onChangeMailAddress(e)}
              />
              <PasswordInput
                value={password}
                onChange={(e) => onChangePassword(e)}
              />
              <LoginButton doLogin={doLogin} />
            </SimpleGrid>
          </Box>
        </Center>
      </Box>
    </div>
  );
});

export default LoginForm;
