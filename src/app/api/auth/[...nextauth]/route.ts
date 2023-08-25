import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler =  NextAuth({
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
      }),
    ],
    

    callbacks: {
      session({user, session}) {
        if (session.user) {
          session.user.name = user.name;
        }
  
        return session;
      },
    }

  });

export { handler as GET, handler as POST}

  