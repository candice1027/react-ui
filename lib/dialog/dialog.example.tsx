import React ,{useState} from 'react'
import Dialog from './dialog'
export default function() {
    const [isVisible,changeVisible] = useState(false)
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
                        <button onClick={closeDialog}>ok</button>
                    ]}
                onCloseDialog={closeDialog}
                closeOnClickMask = {true}
            >
                <p>这里是dialog内容</p>
            </Dialog>
            <button onClick={changeDialogVisible}>click dialog</button> 
        </div>
    )
}