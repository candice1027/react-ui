import React from 'react'
import { alertDialog} from './dialog'
export default function() {
    return (
        <div>
            <button onClick={
                ()=>{alertDialog('this is alertdialog')}
            }>alert dialog</button>
        </div>
    )
}