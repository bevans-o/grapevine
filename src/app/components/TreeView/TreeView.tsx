'use client'

import React from 'react'
import tree from './tree.module.css'
import { Bunch, Grape, Vine } from '@/app/lib/types';
import TreeBunch from './TreeBunch';

function TreeView({vine, selected, onSelect}: {vine: Vine, selected: Bunch | Grape | null, onSelect: Function}) {
  return (
    <div className={tree.sidebar}>
        <h2 className={tree.title}>{vine.name}</h2>
        <p className={tree.desc}>{vine.desc}</p>

        <div className={tree.nodes}>
            {vine.bunches.map((bunch: Bunch, index: number) => 
                <TreeBunch bunch={bunch} key={index + bunch.id} selected={selected} onSelect={(node: Bunch | Grape | null) => onSelect(node)}/>
            )}
        </div>
        
    </div>
  )
}

export default TreeView