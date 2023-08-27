'use client'

import React, { useState } from 'react'
import build from './build.module.css'
import tool from '@/app/tool/tool.module.css'
import button from './../Button/button.module.css'
import AddBunch from './AddBunch'
import AddGrape from './AddGrape'
import { Vine, Bunch, Grape } from '@/app/lib/types'

export enum BuildMode {
  BUNCH,
  GRAPE
}

function BuildPanel({vine, selected}: {vine: Vine, selected: Bunch | Grape | null}) {
  const [mode, setMode] = useState(BuildMode.GRAPE);

  return (
    <div className={tool.toolPanel + " " + build.panel}>

        <div>
          <div className={build.toggle}>
            <button onClick={() => setMode(BuildMode.BUNCH)} className={`${build.toggleBunch} ${button.base} ${button.yes} ${mode == BuildMode.GRAPE && button.inactive}`}><span className={button.text}>Bunch</span></button>
            <button onClick={() => setMode(BuildMode.GRAPE)} className={`${build.toggleGrape} ${button.base} ${button.yes} ${mode == BuildMode.BUNCH && button.inactive}`}><span className={button.text}>Grape</span></button>
          </div>

          {mode == BuildMode.BUNCH && <p className={build.tip}>Bunches let you organise grapes into groups.</p>}
          {mode == BuildMode.GRAPE && <p className={build.tip}>Grapes are individual proposals that are voted on.</p>}
        </div>
        
        
        {mode == BuildMode.BUNCH &&
          <AddBunch vineId={vine.id} selected={selected}/>
        }

        {mode == BuildMode.GRAPE && 
          <AddGrape vineId={vine.id} selected={selected}/>
        }
        
    </div>
  )
}

export default BuildPanel