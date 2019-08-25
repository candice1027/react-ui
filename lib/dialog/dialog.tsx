import React, { Fragment, ReactElement, ReactNode} from 'react'
import ReactDOM from 'react-dom';
import './dialog.scss'
import Icon from '../icon/icon';
import {scopeClassMaker} from '../utils/scopeclass'

interface Props{
    visible: boolean,
    buttons?: Array<ReactElement>,
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
                {props.buttons&&props.buttons.length > 0 && 
                    <footer className={joinClass('footer')}>
                        {props.buttons && props.buttons.map((item,index)=>{
                            return React.cloneElement(item,{key:index})
                        })}
                    </footer>
                }
                
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

const modal = (content: ReactNode, buttons?: Array<ReactElement>) => {
    const onClose = () =>{
        ReactDOM.render(
            React.cloneElement(dialogComponent,{visible:false}),
            currDiv
        )
        ReactDOM.unmountComponentAtNode(currDiv)
        currDiv.remove();
    }
    const dialogComponent = <Dialog 
            visible={true}
            buttons={buttons}
            onCloseDialog={onClose}
        >
        {content}
    </Dialog>
    //创建一个临时div
    const currDiv = document.createElement('div')
    document.body.append(currDiv)
    //将组件渲染到div上
    ReactDOM.render(dialogComponent,currDiv)
    return onClose; //返回关闭弹框函数以便其他地方可以利用执行返回值来关闭弹框
}
const alertDialog = (content:string) =>{
    const button = <button onClick={()=>{closeModal()}}>ok</button>;
    const closeModal = modal(content,[button]);
}

const confirmDialog = (content: string, yesCb?: ()=>void, noCb?: ()=>void) =>{
   const onCancel = ()=>{
        noCb && noCb();
        closeModal()
    }
    const onOk = ()=>{ 
        yesCb && yesCb()
        closeModal();
    }
    const buttons = [
        <button onClick={onCancel}>cancel</button>,
        <button onClick={onOk}>ok</button>
    ]
    const closeModal = modal(content,buttons)
}
Dialog.defaultProps = {
    closeOnClickMask: true
}
export {alertDialog,confirmDialog,modal}
export default Dialog