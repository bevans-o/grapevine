import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import tree from './tree.module.css'
import { Grape } from '@/app/lib/types';

function TreeNode({grape}: {grape: Grape}) {
    const [expanded, setExpanded] = useState(false);
    const childCount = grape.grapes.length;

  return (
    <div>
        <div className={`${tree.node} ${expanded ? tree.expanded : ""} ${childCount > 0 ? tree.hasChildren : ""}`} onClick={() => setExpanded(!expanded)}>
            {grape.name}
            {childCount != 0 && 
            <div className={tree.iconContainer}>
                <KeyboardArrowDownIcon />
            </div>
            }
        </div>

        {expanded && childCount > 0 && <div className={tree.nodeChildren}>
            {grape.grapes.map((childGrape) => 
                <TreeNode grape={childGrape} key={`${grape.id}-${childGrape.id}`}/>
            )}
        </div>}

        
    </div>
  )
}

export default TreeNode