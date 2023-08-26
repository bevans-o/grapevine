"use client";
import {useSession} from "next-auth/react";
import {getUser} from '../lib/functions';
import { useEffect, useState } from "react";
import {User} from '../lib/types'

export default function Dashboard() {
  const {data: session, status} = useSession();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (session?.user && getUser(session.user.email!, setUser))
  }, [session])


  return (
    <main>
      Dashboard {user?.name}
    </main>
  )
}
