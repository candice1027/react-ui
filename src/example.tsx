import React from 'react'
import ReactDOM from 'react-dom'
import './css/normalize.scss'
// import Icon from '../lib/icon/icon';
// import { Router, Route} from 'react-router'
import Header from './header';
import Sider from './aside';
import Main from './main';

ReactDOM.render(
    <div>
        <Header/>
        <Sider/>
        <Main/>
        {/* <Icon name="wechat"/> */}
    </div>,
   document.getElementById('root')
)