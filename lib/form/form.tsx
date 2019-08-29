import React, { ReactFragment } from 'react'
interface Props {
    value: {[key:string]:any};
    fields: Array<{name:string,label:string,input:{type:string}}>;
    buttons: ReactFragment
}
const Form:React.FunctionComponent<Props> = (props) =>{
    return (
     <form>
        {
            props.fields.map((item,key) =>
                <div key={key}>
                    {item.label}
                    <input type={item.input.type} placeholder={props.value[item.name]}/>
                </div>
            )
        }
        <div>
            {props.buttons}
        </div> 
     </form>
    )
}
export default Form