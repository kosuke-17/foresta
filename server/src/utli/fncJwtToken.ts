import { TokenPayload, TokenUserData } from "../types";
import jwt from "jsonwebtoken";
// jwtの鍵
const jwtKey = process.env.JWT_PRIVATE_KEY || "";

export const signJwtToken = (TokenUserData: TokenUserData) => {
  const expirationSeconds = 60 * 60; //有効期限
  const token = jwt.sign({ user: TokenUserData }, jwtKey, {
    expiresIn: expirationSeconds,
  });
  return token;
};

export const verifyJwtToken = (token: string) => {
  const certifiedData = jwt.verify(token, jwtKey) as TokenPayload;
  return certifiedData.user._id;
};
