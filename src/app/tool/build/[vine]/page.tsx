import Menu from "@/app/components/Menu/Menu";

export default function Build({ params }: {params: {vine: string}} ) {
    return (
      <>
        <Menu mode="Building" title={params.vine}/>
        <div>left sidebar</div>
        <div>
          Edit: {params.vine}
        </div>
        <div>right sidebar</div>
      </>
    )
  }
  