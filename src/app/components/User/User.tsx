import React from 'react'
import user from './user.module.css'

function User({name, vote}: {name: string, vote: string}) {
  return (
    <div className={`${user.token} ${vote === "yes" && user.yes} ${vote === "no" && user.no}`}>
        <img/>

        {name != "" && <div className={user.tooltip}>
            {name}
        </div>}

    </div>
  )
}

export default User