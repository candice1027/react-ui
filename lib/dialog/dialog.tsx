import React, { Fragment } from 'react'
import './dialog.scss'
import Icon from '../icon/icon';

interface Props{
    visible: boolean
}
function joinClass(name?: string) {
    return ['lv-dialog',name].filter(Boolean).join('_')

}
const Dialog: React.FunctionComponent<Props> = (props)=>{
    return (
        props.visible ? 
        <Fragment>
            <div className={joinClass('mask')}></div>
            <div className={joinClass('content')}>
                <div className={joinClass('close')}>
                    <Icon name="close" />
                </div>
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