import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import tree from './tree.module.css'

function TreeNode({children, title}: {children: React.ReactNode, title: string}) {
    const [expanded, setExpanded] = useState(false);
    const childCount = React.Children.count(children) - 1;

  return (
    <div>
        <div className={`${tree.node} ${expanded ? tree.expanded : ""} ${childCount > 0 ? tree.hasChildren : ""}`} onClick={() => setExpanded(!expanded)}>
            {title}
            {childCount != 0 && 
                <KeyboardArrowDownIcon />
            }
        </div>

        {expanded && childCount > 0 && <div className={tree.nodeChildren}>
            {children}
        </div>}

        
    </div>
  )
}

export default TreeNode