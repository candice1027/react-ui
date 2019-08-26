import React from 'react';
import IconDemo from '../lib/icon/icon.demo';
import ButtonExample from '../lib/button/button.example';
import DialogDemo from '../lib/dialog/dialog.demo';
import LayoutDemo from '../lib/layout/layout.demo';
import { Route } from 'react-router-dom'
import './css/main.scss'

export default function Main() {
    return (
        <main className="my-main">
            <Route path="/icon" component={IconDemo}></Route> 
            <Route path="/button" component={ButtonExample}></Route> 
            <Route path="/dialog" component={DialogDemo}></Route> 
            <Route path="/layout" component={LayoutDemo}></Route>         
        </main>
    )
}
