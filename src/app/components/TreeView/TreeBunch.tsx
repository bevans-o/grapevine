import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import tree from './tree.module.css'
import { Bunch, Grape } from '@/app/lib/types';
import TreeNode from './TreeNode';

function TreeBunch({bunch}: {bunch: Bunch}) {
    const [expanded, setExpanded] = useState(false);
    const childCount = bunch.grapes.length;

  return (
    <div>
        <div className={`${tree.node} ${expanded ? tree.expanded : ""} ${childCount > 0 ? tree.hasChildren : ""}`} onClick={() => setExpanded(!expanded)}>
            {bunch.name}
            {childCount != 0 && 
            <div className={tree.iconContainer}>
                <KeyboardArrowDownIcon />
            </div>
            }
        </div>

        {expanded && childCount > 0 && <div className={tree.nodeChildren}>
            {bunch.grapes.map((grape: Grape) => 
                <TreeNode grape={grape} key={`${bunch.id}-${grape.id}`}/>
            )}
        </div>}

        
    </div>
  )
}

export default TreeBunch