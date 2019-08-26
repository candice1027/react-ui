import React from 'react'
import Demo from '../../demo'
import LayoutExample from './layout.example'

const x = require('!!raw-loader!./layout.example.tsx');

const DialogDemo = () =>{
    return (
        <Demo code={x.default}>
            <LayoutExample />
        </Demo>
    )
}
export default DialogDemo;