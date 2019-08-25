import React ,{useState} from 'react'
import Dialog, { alertDialog } from './dialog'
export default function() {
    const [isVisible,changeVisible] = useState(true)
    const changeDialogVisible = ()=>{
        changeVisible(!isVisible)
    }
    const closeDialog = () =>{
        changeVisible(false)
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
        </div>
    )
}