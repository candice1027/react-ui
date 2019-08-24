import React from 'react';
import { Link} from 'react-router-dom'
// import ReactDOM from 'react-dom';

export default function Sider() {
    return (
        <aside>
            <h2>组件</h2>
            <ul>
                <li><Link to="/icon" >Icon</Link></li>
                <li><Link to="/button" >button</Link></li>
                <li><Link to="/dialog" >对话框</Link></li>
            </ul>
        </aside>
    )
}
