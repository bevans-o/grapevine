import React from 'react'
import button from './button.module.css'

function Button({text, type="", onClick}: {
    text: string,
    type?: string,
    onClick: Function
}) {


  return (
    <button className={`${button.base} ${type === "yes" && button.yes} ${type === "no" && button.no}`} onClick={() => onClick}>
        <span className={button.text}>{text}</span>
    </button>
  )
}

export default Button