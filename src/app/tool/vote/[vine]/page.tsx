import Menu from "@/app/components/Menu/Menu";

export default function Vote({ params }: {params: {vine: string}} ) {
    return (
      <>
        <Menu mode="Voting" title={params.vine}/>
        <div>left sidebar</div>
        <div>
          Edit: {params.vine}
        </div>
        <div>right sidebar</div>
      </>
    )
  }
  