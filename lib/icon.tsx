import React from 'react';
interface IconProps {
    name: String
}

const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return (
        <span>this is icon{props.name}</span>
    )
}
export default Icon