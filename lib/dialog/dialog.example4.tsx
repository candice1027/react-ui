import React from 'react'
import  {modal} from './dialog'
export default function() {
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
            <button onClick={
                ()=>{openModal()}
            }>modal dialog</button>
        </div>
    )
}