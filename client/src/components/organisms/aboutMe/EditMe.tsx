import { memo, FC, useState, SetStateAction, Dispatch, ReactNode } from "react";
import { UserInfo } from "../../molucules/editMe/UserInfo";

type Props = {
  menuItem: string;
  setMenuItem: Dispatch<SetStateAction<string>>;
};

/**
 * EditMe.
 */
export const EditMe: FC<Props> = memo(({ menuItem, setMenuItem }) => {
  return (
    <>{menuItem === "userInfo" && <UserInfo setMenuItem={setMenuItem} />}</>
  );
});
