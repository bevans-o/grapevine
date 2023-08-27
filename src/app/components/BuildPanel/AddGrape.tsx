import React, { useState } from 'react'
import tool from '@/app/tool/tool.module.css'
import build from './build.module.css'
import Button from '../Button/Button'
import Slider from '@mui/material/Slider'
import { Bunch, Grape, Tag, GrapeStatus } from '@/app/lib/types'
import { addGrape } from '@/app/lib/functions'
import { useRouter } from 'next/navigation'



function AddGrape({vineId, selected, onSave} : {vineId: string, selected : Bunch | Grape | null, onSave : Function}) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [threshold, setThreshold] = useState(75);
    const [tags, setTags] = useState<string[]>([]);

    const router = useRouter();

    const handleSave = () => {
      console.log("save");
      let grape : Grape = {id: "", name: name, desc: desc, threshold: threshold, status: GrapeStatus.OPEN, yeses: [], nos: [], tags: tags, grapes: []}
      if (name && threshold) {
        if (selected) {
          if (isGrape(selected)) {
            addGrape(vineId, grape, "", selected.id);
          } else {
            addGrape(vineId, grape, selected.id, "")
          }
        } else {
          addGrape(vineId, grape, "", "")
        }
        
      }

      setName("");
      setDesc("");
      setThreshold(75);
      setTags([]);


      onSave();

    }

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
            {selected && <p className={build.parent}>Adding grape to <strong>{selected.name}</strong></p>}

            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Proposal'></input>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={5} placeholder='Description'></textarea>

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
                    value={threshold}
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
            {!selected && <p className={build.parentError}>No parent selected! Select a parent node on the left to add this grape to.</p>}
            <Button text='Add' type='yes' disabled={selected ? false : true} onClick={() => handleSave()}/>
            <Button text='Cancel' type='' disabled={selected ? false : true} onClick={() => console.log("cancel")}/>
        </div>
    </div>
    
  )
}

function isGrape(arg: any): arg is Grape {
  return arg && arg.threshold && typeof(arg.threshold) == 'number';
}

export default AddGrape