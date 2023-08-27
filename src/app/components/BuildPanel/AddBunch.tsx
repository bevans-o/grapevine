import React, { useState } from 'react'
import build from './build.module.css'
import tool from '@/app/tool/tool.module.css'
import Button from '../Button/Button';
import { addNewBunch } from '../../lib/functions'
import { Bunch, Grape } from '../../lib/types'
import { useRouter } from 'next/navigation';

interface AddBunchProps {
  vineId: string;
  selected: Grape | Bunch | null;
  onSave: Function;
}



function AddBunch({vineId, selected, onSave} : AddBunchProps) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const router = useRouter();

    const handleSave = () => {
      if (name && desc) {
        let bunch : Bunch = {id: "", name: name, desc: desc, grapes: []}
        addNewBunch(bunch, vineId);
      }


      console.log()

      setName("");
      setDesc("");


      onSave();

    }
    
  return (
    <div className={build.subpanel}>
        <div className={tool.toolPanelSection}>
            <p className={build.parent}>Adding bunch to vine root.</p>

            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name'></input>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={5} placeholder='Description'></textarea>
            
        </div>

        <div className={tool.toolPanelSection}>
            <Button text='Add' type='yes' disabled={false} onClick={() => { console.log("save"); handleSave()}}/>
            <Button text='Cancel' type='' disabled={false} onClick={() => console.log("cancel")}/>
        </div>
    </div>
  )
}

export default AddBunch