'use client'
import Logo from "../components/Logo/Logo";
import login from "./login.module.css"
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleIcon from '@mui/icons-material/Google';
import Button from "../components/Button/Button";
import Names from "../components/Names/Names";


export default function Login() {
  
  return (
      <main className={login.main}>
        <div className={login.content}>
          <Logo type="full"/>
          <div className={login.welcome}>
            Welcome! <strong>Grapevine</strong> is a tool to support collective decision-making in the workplace.
          </div>
          <div className={login.box}>
            <Button text={"Login with Google"} type="yes" onClick={async () => await signIn("google", {callbackUrl: "/dashboard"})}>
              <GoogleIcon />
            </Button>
          </div>
        </div>

        <Names />
      </main>
    )
  }
  