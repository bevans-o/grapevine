"use client";
import {useSession} from "next-auth/react";
import {getUser, getAllUsers, getAllVines, getVine} from '../lib/functions';
import { useEffect, useState } from "react";
import {User, Vine} from '../lib/types'

export default function Dashboard() {
  const {data: session, status} = useSession();
  const [user, setUser] = useState<User>();
  const [vine, setVine] = useState<Vine>();
  const [vines, setVines] = useState<Array<Vine>>();

  useEffect(() => {
    
    (session?.user && getUser(session.user.email!, setUser))

    getAllVines().then((res) => {
      setVines(res)
  }).catch((error) => console.log(error))

    getVine("64e9a34e683720afe532342b").then((res) => {
      setVine(res);
      console.log(res);
    })
  }, [session])


  return (
    <main>
      Dashboard {vine?.id}
      <p>
        {JSON.stringify(vines)}
      </p>
    </main>
  )
}
