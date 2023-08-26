import React, { useState } from 'react'
import tool from '@/app/tool/tool.module.css'
import build from './build.module.css'
import Button from '../Button/Button'
import Slider from '@mui/material/Slider'
import { Grape, Tag } from '@/app/lib/types'

function AddGrape() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [threshold, setThreshold] = useState(50);
    const [tags, setTags] = useState<Tag[]>();

    const marks = [
        {
          value: 50,
          label: '50%',
        },
        {
          value: 75,
          label: '75%',
        },
        {
          value: 90,
          label: '90%',
        },
      ];

  return (
    <div className={build.subpanel}>
        <div className={tool.toolPanelSection}>

            <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Proposal'></input>
            <textarea onChange={(e) => setDesc(e.target.value)} placeholder='Description'></textarea>

            <input type='text' placeholder='Tag'></input>
            
            <div>
                <label>To pass, this grape needs:</label>

                <Slider
                    aria-label="Threshold"
                    defaultValue={75}
                    valueLabelDisplay="auto"
                    step={5}
                    marks={marks}
                    min={10}
                    max={100}
                />
            </div>
            
        </div>

        <div className={tool.toolPanelSection}>
            <Button text='Save' type='yes' onClick={() => console.log("save")}/>
            <Button text='Cancel' type='' onClick={() => console.log("cancel")}/>
        </div>
    </div>
    
  )
}

export default AddGrape