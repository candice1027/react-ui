import React from 'react';
import IconExample from '../lib/icon/icon.example';
import ButtonExample from '../lib/button/button.example';
import DialogExample from '../lib/dialog/dialog.example';
import LayoutExample from '../lib/layout/layout.example';
import { Route } from 'react-router-dom'

export default function Main() {
    return (
        <main>
            <Route path="/icon" component={IconExample}></Route> 
            <Route path="/button" component={ButtonExample}></Route> 
            <Route path="/dialog" component={DialogExample}></Route> 
            <Route path="/layout" component={LayoutExample}></Route>         
        </main>
    )
}
