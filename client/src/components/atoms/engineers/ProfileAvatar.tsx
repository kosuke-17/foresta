import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";

type Props = {
  engineerId: string;
};

export const ProfileAvatar: FC<Props> = memo((engineerId) => {
  return (
    <Link to="/aboutme" state={{ engineerId: engineerId.engineerId }}>
      <Avatar size="2xl" />
    </Link>
  );
});
