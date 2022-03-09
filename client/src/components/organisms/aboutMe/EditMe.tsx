import { memo, FC, SetStateAction, Dispatch } from "react";
import { UserInfo } from "../../molucules/editMe/UserInfo";

type Props = {
  menuItem: string;
  setMenuItem: Dispatch<SetStateAction<string>>;
  onClose: () => void;
};

/**
 * EditMe.
 */
export const EditMe: FC<Props> = memo(({ menuItem, setMenuItem, onClose }) => {
  return (
    <>
      {menuItem === "userInfo" && (
        <UserInfo setMenuItem={setMenuItem} onClose={onClose} />
      )}
    </>
  );
});
