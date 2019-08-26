import React from 'react';
import './css/header.scss';
import Icon from '../lib/icon/icon'
const logo = require('./img/logo.png');


export default function Header() {
    return (
        <header className="web-header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>  
            <div className="github">
                <a href="https://github.com/candice1027/react-ui" target="_blank">
                    <Icon className="github-icon" name="github" />
                </a>
            </div>  
        </header>
    )
}
