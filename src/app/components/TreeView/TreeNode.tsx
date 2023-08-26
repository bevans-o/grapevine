import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import tree from './tree.module.css'
import { Bunch, Grape, GrapeStatus } from '@/app/lib/types';

function TreeNode({grape, selected, onSelect}: {grape: Grape, selected: Bunch | Grape | null, onSelect: Function}) {
    const [expanded, setExpanded] = useState(true);
    const childCount = grape.grapes.length;

  return (
    <div>
        <div 
            onClick={() => {
                if (selected?.id === grape.id) {
                    onSelect(null)
                }
                else {
                    onSelect(grape)
                }
                //setExpanded(!expanded)
            }}
            className={`${tree.node} ${expanded ? tree.expanded : ""}  ${selected?.id === grape.id ? tree.selected : ""} ${grape.status === GrapeStatus.PASSED && tree.passed} ${grape.status === GrapeStatus.FAILED && tree.failed} ${childCount > 0 ? tree.hasChildren : ""}`}>
            {grape.name}
            {/* {childCount != 0 && 
            <div className={tree.iconContainer}>
                <KeyboardArrowDownIcon />
            </div>
            } */}
        </div>

        {expanded && childCount > 0 && <div className={tree.nodeChildren}>
            {grape.grapes.map((childGrape) => 
                <TreeNode grape={childGrape} selected={selected} onSelect={(node: Bunch | Grape | null) => onSelect(node)} key={`${grape.id}-${childGrape.id}`}/>
            )}
        </div>}

        
    </div>
  )
}

export default TreeNode