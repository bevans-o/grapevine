'use client'

import React, { useEffect, useState } from 'react'
import vote from './vote.module.css'
import tool from '@/app/tool/tool.module.css'
import UserBubble from '../User/User'
import { Bunch, Grape, GrapeStatus, User, Vine } from '../../lib/types'
import { getAllUsers } from '@/app/lib/functions'
import Button from '../Button/Button'
import { sampleUsers } from '@/app/lib/sample'

function VotePanel({vine, selected}: {vine: Vine, selected: Bunch | Grape | null}) {
    const [users, setUsers] = useState<Array<User>>(sampleUsers);

    const undecideds = users.filter((user: User) => {
        let voted = false;

        if (isGrape(selected)) {
            selected.yeses.forEach((yes: User) => {
                if (yes.email === user.email) {
                    voted = true;
                }
            })

            selected.nos.forEach((no: User) => {
                if (no.email === user.email) {
                    voted = true;
                }
            })
        }

        return !voted;
    })

    let currentWeight = 0;
    let possibleWeight = 0;
    if (isGrape(selected)) {
        selected?.yeses.forEach((user) => {
            const tags = selected.tags.filter(tag => user.tags.includes(tag));

            currentWeight += user.weight * (tags.length > 0 ? 2 : 1);
        })

        users.forEach((user) => {
            const tags = selected.tags.filter(tag => user.tags.includes(tag));

            possibleWeight += user.weight * (tags.length > 0 ? 2 : 1);
        })
    }

    console.log(currentWeight);
    console.log(possibleWeight);

    let percentage = (possibleWeight > 0) ? Math.round(100 * (currentWeight / possibleWeight)) : 0;

    useEffect(() => {
        getAllUsers().then((res) => {
            setUsers(res)
        }).catch((error) => console.log(error))
    }, [])

    function isGrape(arg: any): arg is Grape {
        return arg && arg.threshold && typeof(arg.threshold) == 'number';
    }

  return (
    
    <div className={tool.toolPanel + " " + vote.panel}>
        
        {selected != null && 
        <>
            <div className={tool.toolPanelSection}>
                <h2>
                    {selected.name}
                </h2>
                {selected.desc != "" && <p className={vote.description}>{selected.desc}</p>}

                {isGrape(selected) && <div className={vote.results}>
                    Results
                    {selected.yeses.length > 0 && <div className={vote.yeses}>
                        {selected.yeses.map((user: User) => 
                            <UserBubble user={user} vote="yes" key={user.email}/>
                        )}
                        <div className={vote.label}>Yes</div>
                    </div>}

                    {selected.nos.length > 0 && <div className={vote.nos}>
                        {selected.nos.map((user: User) => 
                            <UserBubble user={user} vote="no" key={user.email}/>
                        )}
                        <div className={vote.label}>No</div>
                    </div>}

                    {undecideds.length > 0 && <div className={vote.undecided}>
                        {undecideds.map((user: User) => 
                            <UserBubble user={user} vote="" key={user.email}/>
                        )}
                        <div className={vote.label}>Yet to vote</div>
                    </div>}

                    <div className={vote.threshold}>
                        This grape requires {selected.threshold}% consent to pass.

                        {percentage < selected.threshold &&
                            <div className={`${vote.status} ${vote.failing}`}>
                                {percentage}% - FAILING
                            </div>
                        }

                        {percentage >= selected.threshold &&
                            <div className={`${vote.status} ${vote.succeeding}`}>
                                {percentage}% - PASSED
                            </div>
                        }
                        
                    </div>

                    
                </div>}
            </div>

            {isGrape(selected) && <div className={tool.toolPanelSection}>
                <Button text='Yes' type='yes' onClick={() => {console.log("yes")}}/>
                <Button text='No' type='no' onClick={() => {console.log("no")}}/>
            </div>}
        </>
        }


        {selected == null && 
            <p className={tool.noneSelected}>No node selected.</p>
        }

        

        
    </div>
  )
}

export default VotePanel