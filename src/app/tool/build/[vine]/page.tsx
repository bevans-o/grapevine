'use client'

import BubblePlot from "@/app/components/BubblePlot/BubblePlot";
import BuildPanel from "@/app/components/BuildPanel/BuildPanel";
import Menu from "@/app/components/Menu/Menu";
import TreeView from "@/app/components/TreeView/TreeView";
import { sampleVine } from "@/app/lib/sample";
import { Vine, Grape, Bunch } from "@/app/lib/types";
import { useState } from "react";

export default function Build({ params }: {params: {vine: string}} ) {
  const [activeVine, setActiveVine] = useState<Vine>(sampleVine);
  const [selected, setSelected] = useState<Grape | Bunch | null>(null);
  
    return (
      <>
        <Menu mode="Building" title={params.vine}/>
        <TreeView vine={activeVine} selected={selected} onSelect={(node: Grape | Bunch | null) => setSelected(node)}/>
        <BubblePlot vine={activeVine} selected={selected} onSelect={(node: Grape | Bunch | null) => setSelected(node)}/>
        <BuildPanel vine={activeVine} selected={selected}/>
      </>
    )
  }
  