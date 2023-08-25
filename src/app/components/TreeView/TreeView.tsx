'use client'

import React from 'react'
import tree from './tree.module.css'
import TreeNode from './TreeNode'

function TreeView() {
  return (
    <div className={tree.sidebar}>
        <h2 className={tree.title}>Vine Title</h2>

        <div className={tree.nodes}>
            <TreeNode title="Bunch 1"> 
                <TreeNode title="Bunch 1.1"> </TreeNode>
                <TreeNode title="Bunch 1.2"> </TreeNode>
                <TreeNode title="Bunch 1.3"> </TreeNode>
            </TreeNode>
            <TreeNode title="Bunch 2"> 
                <TreeNode title="Bunch 2.1"> 
                    <TreeNode title="Bunch 2.1.1"> </TreeNode>
                    <TreeNode title="Bunch 2.1.2"> </TreeNode>
                    <TreeNode title="Bunch 2.1.3"> </TreeNode>
                </TreeNode>
                <TreeNode title="Bunch 2.2"> </TreeNode>
            </TreeNode>
            <TreeNode title="Bunch 3"> </TreeNode>
            <TreeNode title="Bunch 4"> 
                <TreeNode title="Bunch 4.1"> </TreeNode>
                <TreeNode title="Bunch 4.2"> </TreeNode>
                <TreeNode title="Bunch 4.3"> </TreeNode>
            </TreeNode>
        </div>
        
    </div>
  )
}

export default TreeView