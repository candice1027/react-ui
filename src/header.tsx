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
                <Icon className="github-icon" name="github" />
            </div>  
        </header>
    )
}
