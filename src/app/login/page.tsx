'use client'
import Logo from "../components/Logo/Logo";
import login from "./login.module.css"
import { signIn, signOut, useSession } from "next-auth/react";


export default function Login() {
  
  return (
      <main className={login.main}>
        <div className={login.content}>
          <Logo type="full"/>
          <div className={login.box}>
            <button onClick={() => signIn("google", {callbackUrl: "http://localhost:3000/dashboard"})}>
            Login
            </button>
          </div>
        </div>
      </main>
    )
  }
  