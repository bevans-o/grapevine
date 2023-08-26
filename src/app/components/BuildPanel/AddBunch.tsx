import React, { useState } from 'react'
import build from './build.module.css'
import tool from '@/app/tool/tool.module.css'
import Button from '../Button/Button';

function AddBunch() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    
  return (
    <div className={build.subpanel}>
        <div className={tool.toolPanelSection}>

            <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Name'></input>
            <textarea onChange={(e) => setDesc(e.target.value)} placeholder='Description'></textarea>
            
        </div>

        <div className={tool.toolPanelSection}>
            <Button text='Save' type='yes' onClick={() => console.log("save")}/>
            <Button text='Cancel' type='' onClick={() => console.log("cancel")}/>
        </div>
    </div>
  )
}

export default AddBunch