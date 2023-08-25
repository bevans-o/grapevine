import Logo from "../components/Logo/Logo";
import login from "./login.module.css"

export default function Login() {
    return (
      <main className={login.main}>
        <div className={login.content}>
          <Logo size="full"/>
          <div className={login.box}>
            Login
          </div>
        </div>
      </main>
    )
  }
  