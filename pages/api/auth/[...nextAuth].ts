import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions, Session, Token } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../../../dbConfig/dbPrisma";
import { compare } from "bcryptjs";

// Définissez une structure de session personnalisée
interface CustomSession extends Session {
  user: {
    id: string;
    email: string;
    isAdmin: boolean;
    userType: string;
  };
  accessToken: string;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.accessToken = user.access_token
        token.id = user.id,
        token.role = user.role
        token.userType = user.userType
        token.username = user.username
      }

      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      session.user.role = token.role
      session.user.userType = token.userType
      session.user.username = token.username
      
      return session
    },
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
          throw new Error('Veuillez sais un email et un mot de passe')
        }
        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email }
        });
        if (!existingUser) {
          throw new Error('Email ou mot de passe invalide.')
        }
        const passwordMatch = await compare(credentials.password, existingUser.password);
        if (!passwordMatch) {
          throw new Error('Email ou mot de passe invalide.')
        }
        if (!existingUser.isVerified) {
          throw new Error('Veuillez vérifier votre email.')
        }
        // Return a Promise of the User object with id as a string
        return {
          id: existingUser.id.toString(), // Convert id to string
          email: existingUser.email,
          username: existingUser.username,
          role: existingUser.role,
          userType: existingUser.userType,
        };
      }
    })
  ],
};

export default NextAuth(authOptions);
