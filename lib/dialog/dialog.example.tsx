import React ,{useState} from 'react'
import Dialog from './dialog'
export default function() {
    const [isVisible,changeVisible] = useState(true)
    const changeDialogVisible = ()=>{
        changeVisible(!isVisible)
    }
    return (
        <div>
            <Dialog visible={isVisible}>
                <p>这里是dialog内容</p>
            </Dialog>
            <button onClick={changeDialogVisible}>click change</button>
        </div>
    )
}