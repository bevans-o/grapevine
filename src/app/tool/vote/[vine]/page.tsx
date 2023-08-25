import BubblePlot from "@/app/components/BubblePlot/BubblePlot";
import Menu from "@/app/components/Menu/Menu";
import TreeView from "@/app/components/TreeView/TreeView";
import VotePanel from "@/app/components/VotePanel/VotePanel";

export default function Vote({ params }: {params: {vine: string}} ) {
    return (
      <>
        <Menu mode="Voting" title={params.vine}/>
        <TreeView />
        <BubblePlot />
        <VotePanel />
      </>
    )
  }
  