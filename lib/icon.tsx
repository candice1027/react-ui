import React from 'react';
import './importIcons'
import './icon.scss'

interface IconProps {
    name: String
}

const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return (
        <span >
           <svg className="react-icon">
               <use xlinkHref={`#${props.name}`}></use>
           </svg>
        </span>
    )
}

export default Icon