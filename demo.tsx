import React,{useState} from 'react';
import Highlight,{defaultProps} from "prism-react-renderer"
import theme from 'prism-react-renderer/themes/duotoneLight'
import Icon from './lib/icon/icon'

interface Props {
    code: string
}
const Demo:React.FunctionComponent<Props> = (props) =>{
    const [codeVisible,showCode] = useState(false)
    return (
        <div>
            {props.children}
            <p className="show-code" onClick={()=>{showCode(!codeVisible)}}>代码示例<Icon name="code" /></p>
            {
                codeVisible && 
                <Highlight {...defaultProps} code={props.code} language="jsx" theme={theme}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                        ))}
                    </pre>
                    )}
                </Highlight>
            }
            
        </div>
    )
}
export default Demo