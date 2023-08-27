'use client'

import React from 'react'
import tree from './tree.module.css'
import { Bunch, Grape, Vine } from '@/app/lib/types';
import TreeBunch from './TreeBunch';
import TreeNode from './TreeNode';

function TreeView({vine, selected, onSelect}: {vine: Vine, selected: Bunch | Grape | null, onSelect: Function}) {
  return (
    <div className={tree.sidebar}>
        <h2 className={tree.title}>{vine.name}</h2>
        <p className={tree.desc}>{vine.desc}</p>

        <div className={tree.nodes}>
            {vine.bunches.map((bunch: Bunch, index: number) => 
                <TreeBunch bunch={bunch} key={index + bunch.id} selected={selected} onSelect={(node: Bunch | Grape | null) => onSelect(node)}/>
            )}

            {vine.grapes.map((grape: Grape, index: number) => 
                <TreeNode grape={grape} key={index + grape.id} selected={selected} onSelect={(node: Bunch | Grape | null) => onSelect(node)}/>
            )}
        </div>
        
    </div>
  )
}

export default TreeView