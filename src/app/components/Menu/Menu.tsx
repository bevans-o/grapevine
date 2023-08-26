import React, { useState, useEffect } from 'react'
import menu from './menu.module.css'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import UserBubble from '../User/User'

import {useSession} from "next-auth/react";
import { createVine, getUser } from '../../lib/functions'
import { redirect } from 'next/navigation';
import { User } from '@/app/lib/types'
import { useRouter } from 'next/navigation'





function Menu({mode, title}: {mode: string, title: string}) {
   const {data: session, status} = useSession();
   const [user, setUser] = useState<User>();
   const router = useRouter()

   useEffect(() => {
    (session?.user && getUser(session.user.email!, setUser))
    })




   const handleNew = () => {
        createVine(user!).then(
            (res) => router.push("/tool/build/" + res.toString())
        )
   };
  
  return (
    <nav className={menu.main}>
        <div className={menu.left}>
            <Logo type='icon'/>
            <h1><span className={menu.mode}>{mode}</span> {title}</h1>
        </div>
        
        <div className={menu.right}>
            <Link href="/dashboard">
                <div className={menu.item}>
                    Dashboard
                </div>
            </Link>

            <button className={menu.item} onClick={() => handleNew()}>
                New
            </button>

            <Link href="/login"><UserBubble vote='yes' name=""/></Link>
        </div>
        
    </nav>
  )
}

export default Menu