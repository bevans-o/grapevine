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
    const [tags, setTags] = useState<string[]>([]);

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
            <textarea onChange={(e) => setDesc(e.target.value)} rows={5} placeholder='Description'></textarea>

            <div className={build.tags}>
              {tags.map((tag, index) => 
                <div className={build.tag} key={index}>
                  {tag}
                </div>
              )}
            </div>

            <input type='text' placeholder='Add a tag...' 
              onKeyDown={(e) => {
                if (e.key === "Enter" && tags) {
                  let input = e.target as HTMLInputElement;
                  setTags([...tags, input.value])
                  input.value = "";
                }
            }}></input>
            
            <div className={build.threshold}>
                <label>To pass, this grape needs <span className={build.thresholdLimit}>{threshold}%</span>.</label>

                <Slider
                    aria-label="Threshold"
                    defaultValue={75}
                    valueLabelDisplay="auto"
                    step={5}
                    marks={marks}
                    min={10}
                    max={100}
                    className='threshold'
                    onChange={(e, value) => {
                      if (Array.isArray(value)) {
                        setThreshold(value[0]);
                      }
                      else {
                        setThreshold(value);
                      }
                    }}
                />
            </div>
            
        </div>

        <div className={tool.toolPanelSection}>
            <Button text='Add' type='yes' onClick={() => console.log("save")}/>
            <Button text='Cancel' type='' onClick={() => console.log("cancel")}/>
        </div>
    </div>
    
  )
}

export default AddGrape