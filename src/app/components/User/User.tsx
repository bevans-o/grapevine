import React from 'react'
import userBubble from './user.module.css'
import { User } from '@/app/lib/types'

function User({user, vote}: {user: User, vote: string}) {
  return (
    <div className={`${userBubble.token} ${vote === "yes" && userBubble.yes} ${vote === "no" && userBubble.no}`}>
        {user.image && <img className={userBubble.image} src={user.image} alt={user.name}/>}

        {user.name != "" && <div className={userBubble.tooltip}>
            {user.name}
        </div>}

    </div>
  )
}

export default User