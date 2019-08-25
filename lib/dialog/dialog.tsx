import React, { Fragment, ReactElement } from 'react'
import './dialog.scss'
import Icon from '../icon/icon';
import {scopeClassMaker} from '../utils/scopeclass'

interface Props{
    visible: boolean,
    buttons: Array<ReactElement>,
    onCloseDialog: React.MouseEventHandler
}

const joinClass = scopeClassMaker('lv-dialog')

const Dialog: React.FunctionComponent<Props> = (props)=>{
    return (
        props.visible ? 
        <Fragment>
            <div className={joinClass('mask')}></div>
            <div className={joinClass('content')}>
                <button 
                    className={joinClass('close')}
                    onClick={props.onCloseDialog}
                >
                    <div className="close-icon">
                        <Icon name="close" />
                    </div>
                </button>
                <header className={joinClass('header')}>
                    title 提示
                </header>
                <main className={joinClass('main')}>
                    {props.children}
                </main>
                <footer className={joinClass('footer')}>
                    {props.buttons.map((item,index)=>{
                        return React.cloneElement(item,{key:index})
                    })}
                </footer>
            </div>
        </Fragment> :
        null
    )
}
export default Dialog