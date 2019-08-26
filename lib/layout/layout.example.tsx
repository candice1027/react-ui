import React from 'react';
import {Layout,Header,Content,Footer,Asider} from './layout'
import './layout.example.scss'
const LayoutExample: React.FunctionComponent = () =>{
    return (
        <div className="mylayout-box">
            <p>上中下布局</p>
             <Layout className="mylayout">
                <Header className="myheader">header </Header>
                <Content className="mycontent">content</Content>
                <Footer className="myfooter">footer</Footer>
             </Layout>
             <p>上中下布局 + asider左</p>
             <Layout className="mylayout">
                <Header className="myheader">header </Header>
                <Layout>
                    <Asider className="myasider">asider</Asider> 
                    <Content className="mycontent">content</Content>
                </Layout>
                <Footer className="myfooter">footer</Footer>
             </Layout>
             <p>上中下布局 + asider右</p>
             <Layout className="mylayout">
                <Header className="myheader">header </Header>
                <Layout>
                    <Content className="mycontent">content</Content>
                    <Asider className="myasider">asider</Asider> 
                </Layout>
                <Footer className="myfooter">footer</Footer>
             </Layout>
             <p>左右布局</p>
             <Layout className="mylayout">
                <Asider className="myasider">asider</Asider> 
                <Layout>
                    <Header className="myheader">header </Header>
                    <Content className="mycontent">content</Content>
                    <Footer className="myfooter">footer</Footer>
                </Layout>
             </Layout>
        </div>
    )
}
export default LayoutExample