import React, { ReactFragment, FormEventHandler } from 'react'
export interface FormValue {
    [key:string]:any
}
interface Props {
    value: FormValue;
    fields: Array<{name:string,label:string,input:{type:string}}>;
    buttons: ReactFragment;
    onSubmit: FormEventHandler<HTMLFormElement>;
    onChange: (value: FormValue) => void
}
const Form:React.FunctionComponent<Props> = (props) =>{
    const formData = props.value;
    const submitData:React.FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault()
        props.onSubmit(e)
    }
    const onInputChange = (name:string,e: React.ChangeEvent<HTMLInputElement>)=>{
        const newFormData = {...formData,[name]:e.target.value}
        props.onChange(newFormData)
    }
    return (
        <form onSubmit={submitData}>
            {
                props.fields.map(item =>{
                        return (
                            <div key={item.name}>
                                {item.label}
                                <input 
                                    type={item.input.type} 
                                    value={formData[item.name]}
                                    onChange={onInputChange.bind(null,item.name)}
                                />
                            </div>
                            )
                    }
                )
            }
            <div>
                {props.buttons}
            </div> 
        </form>
    )
}
export default Form