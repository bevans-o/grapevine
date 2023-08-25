import BubblePlot from "@/app/components/BubblePlot/BubblePlot";
import BuildPanel from "@/app/components/BuildPanel/BuildPanel";
import Menu from "@/app/components/Menu/Menu";
import TreeView from "@/app/components/TreeView/TreeView";

export default function Build({ params }: {params: {vine: string}} ) {
    return (
      <>
        <Menu mode="Building" title={params.vine}/>
        <TreeView />
        <BubblePlot />
        <BuildPanel />
      </>
    )
  }
  