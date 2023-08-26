import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import tree from './tree.module.css'
import { Bunch, Grape } from '@/app/lib/types';
import TreeNode from './TreeNode';

function TreeBunch({bunch, selected, onSelect}: {bunch: Bunch, selected: Bunch | Grape | null, onSelect: Function}) {
    const [expanded, setExpanded] = useState(false);
    const childCount = bunch.grapes.length;

  return (
    <div>
        <div 
            onClick={() => {
                if (expanded) {
                    if (selected?.id !== bunch.id) {
                        onSelect(bunch)
                    }
                    else {
                        onSelect(null)
                        setExpanded(!expanded)
                    }
                }
                else {
                    if (selected?.id === bunch.id) {
                        onSelect(null)
    
                    }
                    else {
                        onSelect(bunch)
                    }
                    
                    setExpanded(!expanded)
                }
            }}
            className={`${tree.node} ${expanded ? tree.expanded : ""} ${selected?.id === bunch.id ? tree.selected : ""} ${childCount > 0 ? tree.hasChildren : ""}`}>
            {bunch.name}
            {childCount != 0 && 
            <div className={tree.iconContainer}>
                <KeyboardArrowDownIcon />
            </div>
            }
        </div>

        {expanded && childCount > 0 && <div className={tree.nodeChildren}>
            {bunch.grapes.map((grape: Grape) => 
                <TreeNode grape={grape} selected={selected} onSelect={(node: Bunch | Grape | null) => onSelect(node)} key={`${bunch.id}-${grape.id}`}/>
            )}
        </div>}

        
    </div>
  )
}

export default TreeBunch