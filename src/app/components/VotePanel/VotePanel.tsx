'use client'

import React from 'react'
import vote from './vote.module.css'
import tool from '@/app/tool/tool.module.css'
import User from '../User/User'
import Button from '../Button/Button'

function VotePanel() {
  return (
    <div className={tool.toolPanel + " " + vote.panel}>
        

        <div className={tool.toolPanelSection}>
            <h2>
                Should there be free grapes available in the office?
            </h2>
            <p className={vote.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed adipiscing diam donec adipiscing tristique risus. Laoreet non curabitur gravida arcu ac tortor dignissim. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. At elementum eu facilisis sed odio morbi quis.</p>

            <div className={vote.results}>
                Results
                <div className={vote.yeses}>
                    <User name="Yessica Wingleman" vote="yes"/>
                    <User name="Yessica Wingleman" vote="yes"/>
                    <User name="Yessica Wingleman" vote="yes"/>
                    <User name="Yessica Wingleman" vote="yes"/>
                </div>

                <div className={vote.nos}>
                    <User name="Noel Nevermind" vote="no"/>
                    <User name="Noel Nevermind" vote="no"/>
                </div>

                <div className={vote.undecided}>
                    <User name="Neville Participati" vote=""/>
                    <User name="Neville Participati" vote=""/>
                    <User name="Neville Participati" vote=""/>
                    <User name="Neville Participati" vote=""/>
                    <User name="Neville Participati" vote=""/>
                </div>

                <div className={vote.threshold}>
                    This grape requires 80% consent to pass.

                    <div className={`${vote.status} ${vote.failing}`}>
                        67% - FAILING
                    </div>
                </div>

                
            </div>
        </div>

        <div className={tool.toolPanelSection}>
            <Button text='Yes' type='yes' onClick={() => {console.log("yes")}}/>
            <Button text='No' type='no' onClick={() => {console.log("no")}}/>
        </div>

        
    </div>
  )
}

export default VotePanel