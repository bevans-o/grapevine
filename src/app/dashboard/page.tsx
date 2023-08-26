"use client";
import {useSession} from "next-auth/react";
import {getUser, getAllUsers, getAllVines, getVine} from '../lib/functions';
import { useEffect, useState } from "react";
import {User, Vine} from '../lib/types'
import dashboard from './dashboard.module.css'
import UserBubble from "../components/User/User";
import Logo from "../components/Logo/Logo";
import Names from "../components/Names/Names";

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
      <div className={dashboard.grid}>
        <div className={dashboard.logo}><Logo type="full"/></div>
        <h1 className={dashboard.heading}>Dashboard</h1>

        <div className={dashboard.voteVines}>
          Voting Open
          <div className={dashboard.vineContainer}>
            {vines?.map((vine) => 
              <div key={vine.id} className={dashboard.vine}>{vine.name.slice(0, 1)}</div>
            )}
          </div>
        </div>

        <div className={dashboard.editVines}>
          Your Vines

          <div className={dashboard.vineContainer}>
            {vines?.map((vine: any) => {
              if (vine.owner === user?.email || vine.owner.email === user?.email ) {
                return <div key={vine.id} className={dashboard.vine}>{vine.name.slice(0, 1)}</div>
              }
            })}
          </div>
        </div>

        <div className={dashboard.users}>
          Your Team

          <div className={dashboard.userBubbles}>
            {users.map((user) => 
              <UserBubble key={user.email} user={user} vote="yes"/>
            )}
          </div>
          
        </div>
      </div>

      <Names />
    </main>
  )
}
