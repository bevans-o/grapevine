'use client'

import React, { useEffect, useState } from 'react'
import vote from './vote.module.css'
import tool from '@/app/tool/tool.module.css'
import UserBubble from '../User/User'
import { Bunch, Grape, User, Vine } from '../../lib/types'
import { getAllUsers } from '@/app/lib/functions'
import Button from '../Button/Button'

function VotePanel({vine, selected}: {vine: Vine, selected: Bunch | Grape | null}) {
    const [users, setUsers] = useState<Array<User>>();


    useEffect(() => {
        getAllUsers().then((res) => {
            setUsers(res)
        }).catch((error) => console.log(error))
    })


  return (
    
    <div className={tool.toolPanel + " " + vote.panel}>
        
        {selected != null && 
        <>
            <div className={tool.toolPanelSection}>
                <h2>
                    {selected.name}
                </h2>
                {selected.desc != "" && <p className={vote.description}>{selected.desc}</p>}

                <div className={vote.results}>
                    Results
                    <div className={vote.yeses}>
                        <UserBubble name="Yessica Wingleman" vote="yes"/>
                        <UserBubble name="Yessica Wingleman" vote="yes"/>
                        <UserBubble name="Yessica Wingleman" vote="yes"/>
                        <UserBubble name="Yessica Wingleman" vote="yes"/>
                    </div>

                    <div className={vote.nos}>
                        <UserBubble name="Noel Nevermind" vote="no"/>
                        <UserBubble name="Noel Nevermind" vote="no"/>
                    </div>

                    <div className={vote.undecided}>
                        <UserBubble name="Neville Participati" vote=""/>
                        <UserBubble name="Neville Participati" vote=""/>
                        <UserBubble name="Neville Participati" vote=""/>
                        <UserBubble name="Neville Participati" vote=""/>
                        <UserBubble name="Neville Participati" vote=""/>
                    </div>

                    <div className={vote.threshold}>
                        This grape requires 80% consent to pass.

                        <div className={`${vote.status} ${vote.failing}`}>
                            67% - FAILING
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className={tool.toolPanelSection}>
                <Button text='Yes' type='yes' onClick={() => {console.log("yes")}}/>
                <Button text='No' type='no' onClick={() => {console.log("no")}}/>
            </div>
        </>
        }


        {selected == null && 
            <p className={tool.noneSelected}>No node selected.</p>
        }

        

        
    </div>
  )
}

export default VotePanel