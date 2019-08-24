import React, { Fragment } from 'react'
import './dialog.scss'
import Icon from '../icon/icon';
import {scopeClassMaker} from '../utils/scopeclass'

interface Props{
    visible: boolean
}

const joinClass = scopeClassMaker('lv-dialog')

const Dialog: React.FunctionComponent<Props> = (props)=>{
    return (
        props.visible ? 
        <Fragment>
            <div className={joinClass('mask')}></div>
            <div className={joinClass('content')}>
                <button className={joinClass('close')}>
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
                    <button>cancel</button>
                    <button>ok</button>
                </footer>
            </div>
        </Fragment> :
        null
    )
}
export default Dialog