import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'
import './css/normalize.scss'
import './css/index.scss'
import {Layout,Header,Content,Asider,Footer} from '../lib/layout/layout'
import Head from './header';
import Sider from './aside';
import Main from './main';

ReactDOM.render(
    <Router>
        <Layout className="my-layout">
            <Header >
                <Head/>
            </Header>
            <Layout >
                <Asider>
                    <Sider/>
                </Asider>
                <Content >
                    <Main/>
                </Content>   
            </Layout>
            <Footer className="my-footer">
                &copy; 1205521940@qq.com
            </Footer>
        </Layout> 
    </Router>,
   document.getElementById('root')
)