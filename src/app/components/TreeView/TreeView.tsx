'use client'

import React from 'react'
import tree from './tree.module.css'
import TreeNode from './TreeNode'
import { Bunch, Vine } from '@/app/lib/types';
import TreeBunch from './TreeBunch';

function TreeView({vine}: {vine: Vine}) {
  return (
    <div className={tree.sidebar}>
        <h2 className={tree.title}>{vine.name}</h2>

        <div className={tree.nodes}>
            {vine.bunches.map((bunch: Bunch) => 
                <TreeBunch bunch={bunch}/>
            )}
        </div>
        
    </div>
  )
}

export default TreeView