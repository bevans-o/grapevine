import React, { useState } from 'react'
import build from './build.module.css'
import tool from '@/app/tool/tool.module.css'
import Button from '../Button/Button';
import { addNewBunch } from '../../lib/functions'
import { Bunch } from '../../lib/types'
import generateID from '@/app/lib/generateId';

interface AddBunchProps {
  vineId: string;
}



function AddBunch({vineId} : AddBunchProps) {
    const [name, setName] = useState("New Untitled Vine");
    const [desc, setDesc] = useState("");

    const handleSave = () => {
      if (name && desc) {
        let bunch : Bunch = {id: "", name: name, desc: desc, grapes: []}
        addNewBunch(bunch, vineId);
      }

    }
    
  return (
    <div className={build.subpanel}>
        <div className={tool.toolPanelSection}>

            <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Name'></input>
            <textarea onChange={(e) => setDesc(e.target.value)} rows={5} placeholder='Description'></textarea>
            
        </div>

        <div className={tool.toolPanelSection}>
            <Button text='Save' type='yes' onClick={() => { console.log("save"); handleSave()}}/>
            <Button text='Cancel' type='' onClick={() => console.log("cancel")}/>
        </div>
    </div>
  )
}

export default AddBunch