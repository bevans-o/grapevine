import React from 'react'
import tool from '@/app/tool/tool.module.css'
import build from './build.module.css'
import Button from '../Button/Button'
import Slider from '@mui/material/Slider'

function AddGrape() {
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
    <>
        <div className={tool.toolPanelSection}>
            <h2>
                Should there be free grapes available in the office?
            </h2>

            <input type='text' placeholder='Proposal'></input>
            <input type='text' placeholder='Description'></input>

            <input type='text' placeholder='Tag'></input>
            
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

        <div className={tool.toolPanelSection}>
            <Button text='Save' type='yes' onClick={() => console.log("save")}/>
            <Button text='Cancel' type='' onClick={() => console.log("cancel")}/>
        </div>
    </>
    
  )
}

export default AddGrape