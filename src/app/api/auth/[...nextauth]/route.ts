import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { client, mongodb, db } from "@/app/lib/mongodb";
import { SignInOptions } from "next-auth/react";
import { User, Role } from '../../../lib/types'

const handler =  NextAuth({
    adapter: MongoDBAdapter(mongodb, {collections: {Users: "googleAccounts"}}),
    
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
      }),
    ],
    

    callbacks: {
      async signIn({ user, account, profile, email, credentials } : SignInOptions) {
        createAccount(profile).then((res: any) => {
          console.log(res.data)
        }).catch((error : any) => console.log(error));
        return true
      },
      session({user, session}) {
        if (session.user) {
          session.user.name = user.name;
        }
  
        return session;
      },
    }

  });

export { handler as GET, handler as POST}

  
async function createAccount(profile : any) {
  if ((await db.collection("users").countDocuments({"email" : profile.email})) > 0) {
      return {"body" : "Account Exists!"}
  } else {
      const newUser = getNewUser(profile);
      db.collection("users").insertOne(newUser);
      return {"body" : {"newUser" : JSON.stringify(newUser)}}
  }
}


function getNewUser(profile: GoogleProfile) : User{
  return {email: profile.email, name: profile.name, tags : [], weight : 
  1, image: profile.picture, role: Role.USER}
}