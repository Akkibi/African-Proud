import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    id: string;
    username: string;
    role: string;
    userType: string;
    isVerified: boolean;
  }

  interface User {
    id: string;
    username: string;
    role: string;
    userType: string;
    isVerified: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    role: string;
    userType: string;
    isVerified: boolean;
  }
}