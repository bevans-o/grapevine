import React from 'react'
import menu from './menu.module.css'
import Logo from '../Logo/Logo'
import Link from 'next/link'

function Menu({mode, title}: {mode: string, title: string}) {
  return (
    <nav className={menu.main}>
        <div className={menu.left}>
            <Logo size='icon'/>
            <h1><span className={menu.mode}>{mode}</span> {title}</h1>
        </div>
        
        <div className={menu.right}>
            <Link href="/dashboard">
                <div className={menu.item}>
                    Dashboard
                </div>
            </Link>
        </div>
        
    </nav>
  )
}

export default Menu