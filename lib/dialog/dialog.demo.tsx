import React from 'react';
import Demo from '../../demo'
import DialogExample from './dialog.example'
import DialogExample2 from './dialog.example2'
import DialogExample3 from './dialog.example3'
import DialogExample4 from './dialog.example4'

const dialog1 = require('!!raw-loader!./dialog.example.tsx');
const dialog2 = require('!!raw-loader!./dialog.example2.tsx');
const dialog3 = require('!!raw-loader!./dialog.example3.tsx');
const dialog4 = require('!!raw-loader!./dialog.example4.tsx');

const DialogDemo:React.FunctionComponent= ()=>{
    return (
        <div>
            <Demo code={dialog1.default}>
                <DialogExample />
            </Demo>
            <Demo code={dialog2.default}>
                <DialogExample2 />
            </Demo>
            <Demo code={dialog3.default}>
                <DialogExample3 />
            </Demo>
            <Demo code={dialog4.default}>
                <DialogExample4 />
            </Demo>
        </div>
    )
}
export default DialogDemo