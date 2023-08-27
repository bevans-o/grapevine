'use client'

import React, { useEffect, useState } from 'react'
import vote from './vote.module.css'
import tool from '@/app/tool/tool.module.css'
import UserBubble from '../User/User'
import { Bunch, Grape, GrapeStatus, User, Vine } from '../../lib/types'
import { getAllUsers, voteYes, voteNo, getGrape, getUser } from '@/app/lib/functions'
import Button from '../Button/Button'
import { sampleUsers } from '@/app/lib/sample'
import { useSession } from 'next-auth/react'

function VotePanel({vine, selected, user, onChange}: {vine: Vine, selected: Grape | Bunch | null , user : User, onChange: Function}) {
    const {data: session, status} = useSession();
    const [users, setUsers] = useState<Array<User>>([]);
    const [grape, setGrape] = useState<Grape | null>(isGrape(selected) ? selected :  null);
    const [thisUser, setUser] = useState<User>(user);
    const [hasVoted, setVoted] = useState(false);
    
    useEffect(() => {
        (session?.user && getUser(session.user.email!, setUser))
    }, [session]) 

    useEffect(() => {
        if(isGrape(selected)){
            getGrape(selected?.id!).then((res) => {
                setGrape(res);
            })
        }
    }, [selected]) 

    useEffect(() => {
        setVoted(grape?.yeses.concat(grape?.nos).filter((votedUser) => {
            thisUser?.email == votedUser?.email;
            console.log(votedUser?.email)
        }) ? true : false)
    }, [grape, thisUser])

    const undecideds = users.filter((user: User) => {
        let voted = false;

        if (isGrape(selected)) {
            grape?.yeses.forEach((yes) => {
                if (yes.email === user.email) {
                    voted = true;
                }

            })

            grape?.nos.forEach((no: User) => {
                if (no.email === user.email) {
                    voted = true;
                }
            })
        }
        return !voted;
    })

    let currentWeight = 0;
    let possibleWeight = 0;
    let negativeWeight = 0;
    if (isGrape(selected) && grape) {
        grape?.yeses?.forEach((user) => {
            const tags = selected.tags.filter(tag => user.tags.includes(tag));

            currentWeight += user.weight * (tags.length > 0 ? 2 : 1);
        })

        grape?.nos.forEach((user) => {
            const tags = selected.tags.filter(tag => user.tags.includes(tag));

            negativeWeight += user.weight * (tags.length > 0 ? 2 : 1);
        })

        users.forEach((user) => {
            const tags = grape?.tags.filter(tag => user.tags.includes(tag));

            possibleWeight += user.weight * (tags?.length > 0 ? 2 : 1);
        })
    }


    let percentage = (possibleWeight > 0) ? Math.round(100 * (currentWeight / possibleWeight)) : 0;

    useEffect(() => {
        getAllUsers().then((res) => {
            setUsers(res)
        }).catch((error) => console.log(error))
    }, [])

    function isGrape(arg: any): arg is Grape {
        return arg && arg.threshold && typeof(arg.threshold) == 'number';
    }


    const handleYes = () => {
        if (isGrape(selected) && grape) {
            const tags = grape?.tags.filter(tag => thisUser.tags.includes(tag));
            currentWeight += thisUser.weight * (tags.length > 0 ? 2 : 1);
            let newGrape = {...grape};
            newGrape.yeses.push(thisUser);
            if (currentWeight/possibleWeight >= grape.threshold/100){
                voteYes(selected?.id!, thisUser.email, GrapeStatus.PASSED);
            } else {
                voteYes(selected?.id!, thisUser.email, GrapeStatus.OPEN);
            }

            setGrape(newGrape);
            onChange();
        }
        
    }

    const handleNo = () => {
        console.log("no");
        if (isGrape(selected) && grape) {
            const tags = grape?.tags.filter(tag => thisUser.tags.includes(tag));
            negativeWeight += thisUser.weight * (tags.length > 0 ? 2 : 1);
            let newGrape = {...grape};
            newGrape.nos.push(thisUser);
            if (negativeWeight/possibleWeight >= (100 - grape.threshold)/100){
                voteNo(selected?.id!, thisUser.email, GrapeStatus.FAILED);
            } else {
                voteNo(selected?.id!, thisUser.email, GrapeStatus.OPEN);
            }

            setGrape(newGrape);
            onChange();
        }
    }

  return (
    
    <div className={tool.toolPanel + " " + vote.panel}>
        
        {selected != null && 
        <>
            <div className={tool.toolPanelSection}>
                <h2>
                    {selected.name}
                </h2>
                {selected.desc !== "" && <p className={vote.description}>{selected.desc}</p>}

                {isGrape(selected) && grape && <div className={vote.tags}>
                    {grape.tags.map((tag, index) => 
                        <div className={vote.tag} key={index}>
                        {tag}
                        </div>
                    )}

                </div>}

                {isGrape(selected) && grape && <div className={vote.results}>
                    Results
                    {grape.yeses.length > 0 && <div className={vote.yeses}>
                        {grape?.yeses.map((user: User) => 
                            <UserBubble user={user} vote="yes" key={user.email}/>
                        )}
                        <div className={vote.label}>Yes</div>
                    </div>}

                    {grape.nos.length > 0 && <div className={vote.nos}>
                        {grape?.nos.map((user: User) => 
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
                                {percentage}% IN FAVOUR - UNDECIDED
                            </div>
                        }

                        {selected.status == GrapeStatus.FAILED &&
                            <div className={`${vote.status} ${vote.failed}`}>
                                {percentage}% - UNDECIDED
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

            {isGrape(selected) && grape && undecideds.filter((user)=> user.email === thisUser.email)?.length > 0 && <div className={tool.toolPanelSection}>
                <Button text='Yes' type='yes' disabled={selected.status != GrapeStatus.OPEN} onClick={() => handleYes()}/>
                <Button text='No' type='no' disabled={selected.status != GrapeStatus.OPEN} onClick={() => handleNo()}/>
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