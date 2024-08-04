import { TokenPayload } from "@/types/Auth";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const getUserDataFromCookie = () => {
  const accessToken = Cookies.get("token");

  if (!accessToken) {
    return null;
  }

  const tokenDecoded = jwtDecode<TokenPayload>(accessToken);

  return tokenDecoded;
};
