'use client'

import React, { useState } from 'react'
import build from './build.module.css'
import tool from '@/app/tool/tool.module.css'
import button from './../Button/button.module.css'
import Button from '../Button/Button'
import { Slider } from '@mui/material'
import AddBunch from './AddBunch'
import AddGrape from './AddGrape'

export enum BuildMode {
  BUNCH,
  GRAPE
}

function BuildPanel() {
  const [mode, setMode] = useState(BuildMode.BUNCH);

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
          <AddBunch />
        }

        {mode == BuildMode.GRAPE && 
          <AddGrape />
        }
        
    </div>
  )
}

export default BuildPanel