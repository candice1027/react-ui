import React ,{useState} from 'react'
import Dialog, { alertDialog,confirmDialog,modal} from './dialog'
export default function() {
    const [isVisible,changeVisible] = useState(true)
    const changeDialogVisible = ()=>{
        changeVisible(!isVisible)
    }
    const closeDialog = () =>{
        changeVisible(false)
    }
    const openModal = () =>{
        const getModalClose = modal(<div>
            <h1>你好</h1>
            <p>这里是modal框</p>
            <footer>
                <button onClick={()=>{getModalClose()}}>cancelmodal</button>
                <button onClick={()=>{getModalClose()}}>okmodal</button>
            </footer>  
        </div>)
    }
    
    return (
        <div>
            <Dialog 
                visible={isVisible} 
                buttons={[
                        <button onClick={closeDialog}>cancel</button>,
                        <button>ok</button>
                    ]}
                onCloseDialog={closeDialog}
                closeOnClickMask = {true}
            >
                <p>这里是dialog内容</p>
            </Dialog>
            <button onClick={changeDialogVisible}>click change</button>
            <button onClick={()=>{alertDialog('this is alertdialog')}}>alert dialog</button>
            <button onClick={()=>{
                    confirmDialog(
                        'this is confirmdialog',
                        ()=>{console.log('yes')},
                        ()=>{console.log('no')}
                    )
                }
            }>confirm dialog</button>
            <button onClick={
                ()=>{openModal()}
            }>modal dialog</button>
        </div>
    )
}