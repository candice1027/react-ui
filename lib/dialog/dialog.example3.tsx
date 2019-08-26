import React from 'react'
import {confirmDialog} from './dialog'
export default function() {
    return (
        <div>
            <button onClick={()=>{
                    confirmDialog(
                        'this is confirmdialog',
                        ()=>{console.log('yes')},
                        ()=>{console.log('no')}
                    )
                }
            }>confirm dialog</button>
        </div>
    )
}