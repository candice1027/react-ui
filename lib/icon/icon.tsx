import React from 'react';
import './icon.scss'
import './importIcons'
import classnames from '../utils/classnames';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string,
}
const Icon:React.FunctionComponent<IconProps> = 
    ({
        className,
        name,
        ...rest
    }) =>{
    return (
        <svg 
            className={classnames('lv-ui_icon' ,className)}
            {...rest}
        >
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}
export default Icon
