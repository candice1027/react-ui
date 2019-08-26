import React from 'react';
import Demo from '../../demo'
import DialogExample from './dialog.example'

const x = require('!!raw-loader!./dialog.example.tsx');

const DialogDemo:React.FunctionComponent= ()=>{
    return (
        <Demo code={x.default}>
            <DialogExample />
        </Demo>
    )
}
export default DialogDemo