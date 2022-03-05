import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Auth = () => {
  // クッキー
  const [cookies] = useCookies();
  const auth = cookies.ForestaID;
  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};
