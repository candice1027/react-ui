import React from 'react';
import { scopeClassMaker } from '../utils/scopeclass';
import classnames from '../utils/classnames';

interface Props extends React.HTMLAttributes<HTMLElement>{

}
const sc = scopeClassMaker('lv-layout')
const Content:React.FunctionComponent<Props> = (props) =>{
    const {className,...reset} = props
    return (
        <div className={classnames(sc('content'),className)} {...reset}>
            {props.children}
        </div>
    )
}
export default Content