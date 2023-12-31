import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import MongoGlobal from "@/app/lib/mongodb";
import { SignInOptions } from "next-auth/react";
import { User, Role } from '../../../lib/types'

const handler =  NextAuth({
    adapter: MongoDBAdapter(MongoGlobal.getPromise(), {collections: {Users: "googleAccounts"}}),
    
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
      }),
    ],
    

    callbacks: {
      async signIn({ user, account, profile, email, credentials } : SignInOptions) {
        createAccount(profile).then((res: any) => {
        }).catch((error : any) => console.log(error));
        return true
      },
      session({user, session}) {
        if (session.user) {
          session.user.name = user.name;
        }
  
        return session;
      },
    },

    secret: process.env.NEXTAUTH_SECRET // SECRET env variable

  });

export { handler as GET, handler as POST}

  
async function createAccount(profile : any) {
  if ((await MongoGlobal.getDb().collection("users").countDocuments({"email" : profile.email})) > 0) {
      return {"body" : "Account Exists!"}
  } else {
      const newUser = getNewUser(profile);
      MongoGlobal.getDb().collection("users").insertOne(newUser);
      return {"body" : {"newUser" : JSON.stringify(newUser)}}
  }
}


function getNewUser(profile: GoogleProfile) : User{
  return {email: profile.email, name: profile.name, tags : [], weight : 
  1, image: profile.picture, role: Role.USER}
}