"use client";
import {useSession} from "next-auth/react";
import {getUser, getAllUsers, getAllVines, getVine, createVine} from '../lib/functions';
import { useEffect, useState } from "react";
import {User, Vine} from '../lib/types'
import dashboard from './dashboard.module.css'
import UserBubble from "../components/User/User";
import Logo from "../components/Logo/Logo";
import Names from "../components/Names/Names";
import Link from "next/link";
import Button from "../components/Button/Button";
import router from "next/router";

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

  const handleNew = () => {
    createVine(user!).then(
        (res) => router.push("/tool/build/" + res.toString())
    )
};


  return (
    <main className={dashboard.main}>
      <div className={dashboard.grid}>
        <div className={dashboard.logo}><Logo type="full"/> <span>Enterprise Edition</span></div>
        <h1 className={dashboard.heading}>Dashboard</h1>

        <div className={dashboard.voteVines}>
          <h2>Voting Open</h2>
          <div className={dashboard.vineContainer}>
            {vines?.map((vine: any) => 
              <Link key={vine.id}  href={'/tool/vote/' + vine._id}><div className={dashboard.vine}>{vine.name.slice(0, 1)}<div className={dashboard.vineTitle}>Vote on {vine.name}</div></div></Link>
            )}
          </div>
        </div>

        <div className={dashboard.editVines}>
          <h2>Your Vines <Button text={'New Vine'} type="" onClick={() => handleNew()}></Button></h2>

          <div className={dashboard.vineContainer}>
            {vines?.map((vine: any) => {
              console.log(vine);
              if (vine.owner === user?.email || vine.owner.email === user?.email ) {
                return <Link key={vine.id} href={'/tool/build/' + vine._id}><div className={dashboard.vine}>{vine.name.slice(0, 1)} <div className={dashboard.vineTitle}>Edit {vine.name}</div></div></Link>
              }
            })}
          </div>
        </div>

        <div className={dashboard.users}>
          <h2>Your Team</h2>

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
