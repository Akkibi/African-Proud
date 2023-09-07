import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      userType: string;
      role: string;
      isVerified: boolean;
    } & DefaultSession
  }

  interface User extends DefaultUser {
    role: String,
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: String
  }
}
