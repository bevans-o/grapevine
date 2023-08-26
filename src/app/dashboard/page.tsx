"use client";
import {useSession} from "next-auth/react";
import {getUser, getAllUsers, getAllVines} from '../lib/functions';
import { useEffect, useState } from "react";
import {User, Vine} from '../lib/types'

export default function Dashboard() {
  const {data: session, status} = useSession();
  const [user, setUser] = useState<User>();
  const [vines, setVines] = useState<Array<Vine>>();

  useEffect(() => {
    (session?.user && getUser(session.user.email!, setUser))
    getAllVines().then((res) => {
      setVines(res)
  }).catch((error) => console.log(error))
  }, [session])


  return (
    <main>
      Dashboard {user?.name}
      <p>
        {JSON.stringify(vines)}
      </p>
    </main>
  )
}
