import React, { Fragment, ReactElement } from 'react'
import ReactDOM from 'react-dom';
import './dialog.scss'
import Icon from '../icon/icon';
import {scopeClassMaker} from '../utils/scopeclass'

interface Props{
    visible: boolean,
    buttons: Array<ReactElement>,
    onCloseDialog: React.MouseEventHandler,
    closeOnClickMask?: boolean
}

const joinClass = scopeClassMaker('lv-dialog')
const Dialog: React.FunctionComponent<Props> = (props)=>{
    const onClickClose:React.MouseEventHandler = (e)=>{
        props.onCloseDialog(e)
    }
    const onClickMask:React.MouseEventHandler = (e) =>{
        if (props.closeOnClickMask) {
            props.onCloseDialog(e)
        }
    }
    const dialogDom = 
        props.visible ? 
        <Fragment>
            <div 
                className={joinClass('mask')}
                onClick={onClickMask}
            ></div>
            <div className={joinClass('content')}>
                <button 
                    className={joinClass('close')}
                    onClick={onClickClose}
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
    return (
        ReactDOM.createPortal(
            dialogDom,
            document.body
        ) 
    )   
}
Dialog.defaultProps = {
    closeOnClickMask: true
}
export default Dialog