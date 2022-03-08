import React, { FC, useState } from "react";
import { Button } from "@chakra-ui/react";
export const FollowButton: FC = () => {
  const [status, setStatus] = useState(true);
  const change = () => {
    setStatus(!status);
  };
  return (
    <div>
      {status ? (
        <Button
          colorScheme="teal"
          size="md"
          width="150px"
          _focus={{ boxShadow: "none" }}
          onClick={change}
        >
          follow
        </Button>
      ) : (
        <Button
          colorScheme="teal"
          variant="outline"
          size="md"
          width="150px"
          _focus={{ boxShadow: "none" }}
          onClick={change}
        >
          unfollow
        </Button>
      )}
    </div>
  );
};
