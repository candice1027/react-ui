import React, { ReactElement } from 'react';
import Asider from './asider'
import './layout.scss'
import { scopeClassMaker } from '../utils/scopeclass';
import classnames from '../utils/classnames';
const sc = scopeClassMaker('lv-layout')

//props 可以接受style classnames id 等，所以可以让props直接继承React.HTMLAttributes
interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement> //声明children的类型可以限制使用者对这个layout的使用，里面必须传元素
}
const Layout:React.FunctionComponent<Props> = (props) =>{
    const {className,...reset} = props
    const children = props.children as Array<ReactElement>
    //遍历children 查看children 的type是否有asider有的话就加上class名
    const hasAside = children.length && 
        children.reduce((result,node)=> {
              return result || node.type === Asider
            },
            false
        )
    return (
        <div className={classnames(sc(''),className, hasAside ? 'hasAside' : '')} {...reset}>
           {props.children}
        </div>
    )
}
export default Layout

export { Layout }
export { default as Header } from './header'
export { default as Content } from './content'
export { default as Asider } from './asider'
export { default as Footer } from './footer'