'use client'

import BubblePlot from "@/app/components/BubblePlot/BubblePlot";
import Menu from "@/app/components/Menu/Menu";
import TreeView from "@/app/components/TreeView/TreeView";
import VotePanel from "@/app/components/VotePanel/VotePanel";
import { sampleVine } from "@/app/lib/sample";
import { Bunch, Grape, Vine } from "@/app/lib/types";
import { useState } from "react";

export default function Vote({ params }: {params: {vine: string}} ) {
  const [activeVine, setActiveVine] = useState<Vine>(sampleVine);
  const [selected, setSelected] = useState<Grape | Bunch | null>(null);

    return (
      <>
        <Menu mode="Voting" title={params.vine}/>
        <TreeView vine={activeVine} selected={selected} onSelect={(node: Grape | Bunch | null) => setSelected(node)}/>
        <BubblePlot vine={activeVine} selected={selected} onSelect={(node: Grape | Bunch | null) => setSelected(node)}/>
        <VotePanel vine={activeVine} selected={selected}/>
      </>
    )
  }
  