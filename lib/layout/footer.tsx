import React from 'react';
import { scopeClassMaker } from '../utils/scopeclass';
import classnames from '../utils/classnames';

const sc = scopeClassMaker('lv-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {
    
}
const Footer:React.FunctionComponent<Props> = (props) =>{
    const {className,...reset} = props
    return (
        <div className={classnames(sc('footer'),className)} {...reset}>
            {props.children}
        </div>
    )
}
export default Footer