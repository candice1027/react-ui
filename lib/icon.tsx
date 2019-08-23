import React from 'react';
import './icon.scss'
import './importIcons'
import classnames from './utils/classnames';

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
        <span>
            <svg 
                className={classnames('react-icon' ,className)}
                {...rest}
            >
                <use xlinkHref={`#${name}`}></use>
            </svg>
        </span>
    )
}
export default Icon
