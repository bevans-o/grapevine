'use client'

import BubblePlot from "@/app/components/BubblePlot/BubblePlot";
import Menu from "@/app/components/Menu/Menu";
import TreeView from "@/app/components/TreeView/TreeView";
import VotePanel from "@/app/components/VotePanel/VotePanel";
import { sampleVine } from "@/app/lib/sample";
import { Bunch, Grape, Vine, User } from "@/app/lib/types";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getUser, getVine } from "@/app/lib/functions";

export default function Vote({ params }: {params: {vine: string}} ) {
  const {data: session, status} = useSession();
  const [activeVine, setActiveVine] = useState<Vine>(sampleVine);
  const [selected, setSelected] = useState<Grape | Bunch | null>(null);
  const [user, setUser] = useState<User>();

  console.log(user);

  useEffect(() => {
    (session?.user && getUser(session.user.email!, setUser))
    console.log("vineId " + params.vine)
    getVine(params.vine).then((res) => {
      setActiveVine(res)
    })
    
  }, [])




    return (
      <>
        <Menu mode="Voting" title={activeVine.name}/>
        <TreeView vine={activeVine} selected={selected} onSelect={(node: Grape | Bunch | null) => setSelected(node)}/>
        <BubblePlot vine={activeVine} selected={selected} onSelect={(node: Grape | Bunch | null) => setSelected(node)}/>
        <VotePanel vine={activeVine} selected={isGrape(selected) ? selected : null} user={user!}/>
      </>
    )
  }
  
  function isGrape(arg: any): arg is Grape {
    return arg && arg.threshold && typeof(arg.threshold) == 'number';
  }