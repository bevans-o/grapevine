import React from 'react'
import bubble from './bubble.module.css'
import { Bunch, Grape, Vine } from '@/app/lib/types'

function BubblePlot({vine, selected, onSelect}: {vine: Vine, selected: Bunch | Grape | null, onSelect: Function}) {
  return (
    <div className={bubble.container}>No data loaded.</div>
  )
}

export default BubblePlot