'use client'
import Logo from "../components/Logo/Logo";
import login from "./login.module.css"
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleIcon from '@mui/icons-material/Google';
import Button from "../components/Button/Button";


export default function Login() {
  
  return (
      <main className={login.main}>
        <div className={login.content}>
          <Logo type="full"/>
          <div className={login.welcome}>
            Welcome! <strong>Grapevine</strong> is a tool to support collective decision-making in the workplace.
          </div>
          <div className={login.box}>
            <Button text={"Login with Google"} type="yes" onClick={() => signIn("google", {callbackUrl: "http://localhost:3000/dashboard"})}>
              <GoogleIcon />
            </Button>
          </div>
        </div>
      </main>
    )
  }
  