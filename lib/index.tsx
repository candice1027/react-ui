import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
const iconClickFn = ()=>{
    console.log('click')
}
ReactDOM.render(
    <div>
        <Icon name="wechat" onClick={iconClickFn}/>
        <Icon name="setting" onClick={iconClickFn}/>
        <Icon name="location" onClick={iconClickFn}/>
    </div>,
    document.getElementById('root')
)
