'use client'

import BubblePlot from "@/app/components/BubblePlot/BubblePlot";
import BuildPanel from "@/app/components/BuildPanel/BuildPanel";
import Menu from "@/app/components/Menu/Menu";
import TreeView from "@/app/components/TreeView/TreeView";
import { getVine } from "@/app/lib/functions";
import { emptyVine, sampleVine } from "@/app/lib/sample";
import { Vine, Grape, Bunch } from "@/app/lib/types";
import { useEffect, useState } from "react";

export default function Build({ params }: {params: {vine: string}} ) {
  const [activeVine, setActiveVine] = useState<Vine>(emptyVine);
  const [selected, setSelected] = useState<Grape | Bunch | null>(null);
  

  useEffect(() => {
    getVine(params.vine).then((res) => setActiveVine(res)).catch((err) => setActiveVine(sampleVine));
  }, [params.vine])
  
    return (
      <>
        <Menu mode="Building" title={activeVine.name}/>
        <TreeView vine={activeVine} selected={selected} onSelect={(node: Grape | Bunch | null) => setSelected(node)}/>
        <BubblePlot vine={activeVine} selected={selected} onSelect={(node: Grape | Bunch | null) => setSelected(node)}/>
        <BuildPanel vine={activeVine} selected={selected}/>
      </>
    )
  }
  