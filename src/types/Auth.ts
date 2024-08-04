export interface TokenPayload {
  email: string;
  id: string;
  role: "client" | "admin";
  iat: number;
  exp: number;
}
