import React from 'react';
import IconExample from './icon.example';
import Demo from '../../demo';

const x = require('!!raw-loader!./icon.example.tsx');

const IconDemo = ()=>{
    return (
        <Demo code={x.default}>
            <IconExample />
        </Demo>
    )
}
export default IconDemo
