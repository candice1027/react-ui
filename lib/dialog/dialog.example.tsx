import React ,{useState} from 'react'
import Dialog from './dialog'
export default function() {
    const [isVisible,changeVisible] = useState(true)
    const changeDialogVisible = ()=>{
        changeVisible(!isVisible)
    }
    return (
        <div>
            <Dialog visible={isVisible}/>
            <button onClick={changeDialogVisible}>click change</button>
        </div>
    )
}