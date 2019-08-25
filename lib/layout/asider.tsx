import React from 'react';
import { scopeClassMaker } from '../utils/scopeclass';
import classnames from '../utils/classnames';
const sc = scopeClassMaker('lv-layout')
interface Props extends React.HTMLAttributes<HTMLElement> {}

const Asider:React.FunctionComponent<Props> = (props) =>{
    const {className,...reset} = props
    return (
        <div className={classnames(sc('asider'),className)} {...reset}>
            {props.children}
        </div>
    )
}
export default Asider