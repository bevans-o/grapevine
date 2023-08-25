'use client'

import React from 'react'
import tree from './tree.module.css'
import TreeNode from './TreeNode'

function TreeView() {
  return (
    <div className={tree.sidebar}>
        <h2 className={tree.title}>Vine Title</h2>

        <div className={tree.nodes}>
            <TreeNode title="Grape 1"> 
                <TreeNode title="Grape 1.1"> </TreeNode>
                <TreeNode title="Grape 1.2"> </TreeNode>
                <TreeNode title="Grape 1.3"> </TreeNode>
            </TreeNode>
            <TreeNode title="Grape 2"> 
                <TreeNode title="Grape 2.1"> 
                    <TreeNode title="Grape 2.1.1"> </TreeNode>
                    <TreeNode title="Grape 2.1.2"> </TreeNode>
                    <TreeNode title="Grape 2.1.3"> </TreeNode>
                </TreeNode>
                <TreeNode title="Grape 2.2"> </TreeNode>
            </TreeNode>
            <TreeNode title="Grape 3"> </TreeNode>
            <TreeNode title="Grape 4"> 
                <TreeNode title="Grape 4.1"> </TreeNode>
                <TreeNode title="Grape 4.2"> </TreeNode>
                <TreeNode title="Grape 4.3"> </TreeNode>
            </TreeNode>
        </div>
        
    </div>
  )
}

export default TreeView