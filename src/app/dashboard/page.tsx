"use client";
import {useSession} from "next-auth/react";
import {getUser, getAllUsers} from '../lib/functions';
import { useEffect, useState } from "react";
import {User} from '../lib/types'

export default function Dashboard() {
  const {data: session, status} = useSession();
  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<Array<User>>();

  useEffect(() => {
    (session?.user && getUser(session.user.email!, setUser))
    getAllUsers().then((res) => {
      setUsers(res)
  }).catch((error) => console.log(error))
  }, [session])


  return (
    <main>
      Dashboard {user?.name}
    </main>
  )
}
