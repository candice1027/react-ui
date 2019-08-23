import React from 'react';
import './icon.scss'
import './importIcons'
import classnames from './utils/classnames';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string,
}
const Icon:React.FunctionComponent<IconProps> = (props) =>{
    const {className,...rest} = props;
    return (
        <span>
            <svg 
                className={classnames('react-icon' ,className)}
                {...rest}
            >
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        </span>
    )
}
export default Icon
