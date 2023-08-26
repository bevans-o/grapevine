import React from 'react'
import names from './names.module.css'

function Names() {
  return (
    <div className={names.names}>
        <a target="_blank" href="https://www.linkedin.com/in/ben-evans-48b4111ab/">Ben</a>
        <span>&</span>
        <a target="_blank" href="https://www.linkedin.com/in/risa-pais/">Risa</a>
    </div>
  )
}

export default Names