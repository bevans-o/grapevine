import Menu from "@/app/components/Menu/Menu";
import TreeView from "@/app/components/TreeView/TreeView";

export default function Build({ params }: {params: {vine: string}} ) {
    return (
      <>
        <Menu mode="Building" title={params.vine}/>
        <TreeView />
        <div>
          Edit: {params.vine}
        </div>
        <div>right sidebar</div>
      </>
    )
  }
  