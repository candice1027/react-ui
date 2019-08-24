import React from 'react';
import Icon from '../lib/icon/icon';
import { Route } from 'react-router'

export default function Main() {
    return (
        <main>
            <Route path="/icon" component={Icon}></Route> 
            <Route path="/button" component={Icon}></Route>  
        </main>
    )
}
