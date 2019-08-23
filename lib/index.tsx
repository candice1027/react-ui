import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
const iconClickFn:React.MouseEventHandler = (e)=>{
    console.log(e)
}
ReactDOM.render(
    <div>
        <Icon 
            name="wechat" 
            className=" myicon "
            onClick={iconClickFn}
            onMouseLeave={()=>{console.log('leave')}}
            onMouseEnter={()=>{console.log('enter')}}
        />
        <Icon name="setting" onClick={iconClickFn}/>
        <Icon name="location" onClick={iconClickFn}/>
    </div>,
    document.getElementById('root')
)
