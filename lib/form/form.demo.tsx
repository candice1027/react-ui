import React from 'react';
import Demo from '../../demo'
import FormExample from './form.example'
const form = require('!!raw-loader!./form.example.tsx');
const FormDemo = () =>{
    return (
        <div>
            <Demo code={form.default}>
                <FormExample/>
            </Demo>
        </div>
    )
}
export default FormDemo