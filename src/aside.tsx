import React from 'react';
import './css/asider.scss';
import { NavLink} from 'react-router-dom'

export default function Sider() {
    return (
        <aside className="site-aside">
            <h2>组件</h2>
                <ul>
                    <li><NavLink to="/icon" >Icon</NavLink></li>
                    <li><NavLink to="/button" >button</NavLink></li>
                    <li><NavLink to="/dialog" >对话框</NavLink></li>
                    <li><NavLink to="/layout" >布局</NavLink></li>
                </ul>
        </aside>
    )
}
