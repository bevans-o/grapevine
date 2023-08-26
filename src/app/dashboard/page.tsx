"use client";
import {useSession} from "next-auth/react";
import {getUser, getAllUsers, getAllVines, getVine} from '../lib/functions';
import { useEffect, useState } from "react";
import {User, Vine} from '../lib/types'
import dashboard from './dashboard.module.css'

export default function Dashboard() {
  const {data: session, status} = useSession();
  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);
  const [vines, setVines] = useState<Array<Vine>>();

  useEffect(() => {
    
    (session?.user && getUser(session.user.email!, setUser))

    getAllVines().then((res) => {
      setVines(res)
  }).catch((error) => console.log(error))

  }, [session])

  useEffect(() => {
      getAllUsers().then((res) => {
          setUsers(res)
      }).catch((error) => console.log(error))
  }, [])


  return (
    <main className={dashboard.main}>
      Dashboard
      <p>
        {JSON.stringify(vines)}
      </p>

      <p>
        {JSON.stringify(user)}
      </p>

      <p>
        {JSON.stringify(users)}
      </p>
    </main>
  )
}
