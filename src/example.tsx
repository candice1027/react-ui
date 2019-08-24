import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'
import './css/normalize.scss'
import Header from './header';
import Sider from './aside';
import Main from './main';

ReactDOM.render(
    <Router>
        <div>
            <Header/>
            <Sider/>
            <Main/>
        </div>
    </Router>,
   document.getElementById('root')
)