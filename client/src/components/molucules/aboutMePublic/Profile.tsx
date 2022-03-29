import { memo, FC } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import styled from "styled-components";

type Props = { userData: { name: string; githubId: string; jobType: string } };

/**
 * profileボックス.
 */
export const Profile: FC<Props> = memo(({ userData }) => {
  const guthubBtn = (
    <>
      <Flex alignItems="center" justifyContent="center" gap={2}>
        <div>GitHub</div>
        <div>
          <MarkGithubIcon size={16} />
        </div>
      </Flex>
    </>
  );

  return (
    <>
      <_Contents>
        <_ImageBox>
          <_Image
            src={`https://github.com/${userData.githubId}.png`}
            alt="githubアカウントアイコン"
          />
        </_ImageBox>
        <_Name>{userData.name}</_Name>
        <_Job>{userData.jobType}</_Job>
        <Button
          marginTop={3}
          marginBottom={3}
          type="button"
          width={170}
          borderRadius={20}
          textColor="white"
          backgroundColor={"green.400"}
          _focus={{ boxShadow: "none" }}
          _hover={{ backgroundColor: "green.300" }}
          _active={{ backgroundColor: "green.200" }}
        >
          Follow
        </Button>

        <Button
          type="button"
          width={170}
          borderRadius={20}
          textColor="white"
          backgroundColor="Black"
          _focus={{ boxShadow: "none" }}
          _hover={{ backgroundColor: "gray.600" }}
          _active={{ backgroundColor: "gray.400" }}
        >
          <a href={`https://github.com/${userData.githubId}`} target="blank">
            {guthubBtn}
          </a>
        </Button>
      </_Contents>
    </>
  );
});

//GitHubユーザアイコン.
const _Image = styled.img`
  width: 70px;
  height: 70px;
`;

//GitHubユーザアイコンの回り部分.
const _ImageBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//項目
const _Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

//氏名
const _Name = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
  color: #a7a7a7;
`;

//職種
const _Job = styled.div`
  font-weight: bold;
  margin-top: 10px;
  color: #a7a7a7;
`;
