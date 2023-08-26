import React from 'react'
import button from './button.module.css'

function Button({text, type="", onClick, children}: {
    text: string,
    type?: string,
    onClick: Function,
    children?: React.ReactNode
}) {


  return (
    <button className={`${button.base} ${type === "yes" && button.yes} ${type === "no" && button.no}`} onClick={() => onClick()}>
        <span className={button.text}>{text}</span>{children}
    </button>
  )
}

export default Button