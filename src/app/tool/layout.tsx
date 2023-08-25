import React from 'react'
import tool from './tool.module.css'
import Menu from '../components/Menu/Menu'

function ToolLayout({children}: {children: React.ReactNode}) {
  return (
    <main className={tool.main}>
        
        <div className={tool.content}>
            {children}
        </div>
        
    </main>
  )
}

export default ToolLayout