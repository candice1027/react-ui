import React from 'react'
import Icon from './icon'
import './icon.example.scss'
const IconExample:React.FunctionComponent = () =>{
    return (
        <div>
            <p>icon list </p>
            <ul>
                <li><Icon name="wechat"></Icon></li>
                <li><Icon name="alipay"></Icon></li>
                <li><Icon name="weibo"></Icon></li>
                <li><Icon name="github"></Icon></li>
                <li><Icon name="email"></Icon></li>
                <li><Icon name="location"></Icon></li>
                <li><Icon name="taobao"></Icon></li>
                <li><Icon name="error"></Icon></li>
                <li><Icon name="warn"></Icon></li>
            </ul> 
            
        </div>
    )
}
export default IconExample