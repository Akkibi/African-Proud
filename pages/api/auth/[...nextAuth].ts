import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email@gmail.com" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Veuillez saisir un email et un mot de passe');
        }
        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email }
        });
        if (!existingUser) {
          throw new Error('Email ou mot de passe invalide.');
        }
        const passwordMatch = await compare(credentials.password, existingUser.password);
        if (!passwordMatch) {
          throw new Error('Email ou mot de passe invalide.');
        }
        if (!existingUser.isVerified) {
          throw new Error('Veuillez vérifier votre email.');
        }
     
        return {
          id: existingUser.id.toString(),
          email: existingUser.email,
          username: existingUser.username,
          role: existingUser.role,
          userType: existingUser.userType,
          isVerified: existingUser.isVerified, 
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {

      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.userType = user.userType; 
        token.username = user.username; 
        token.isVerified = user.isVerified;
      }
    
      return token;
    },
    
    async session({ session, token }) {
      session.id = token.id;
      session.role = token.role;
      session.userType = token.userType; 
      session.username = token.username; 
      session.isVerified = token.isVerified
    
      return session;
    },
  },
};

export default NextAuth(authOptions);
