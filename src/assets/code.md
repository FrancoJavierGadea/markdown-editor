# Ejemplo code en Markdown

`inline code`

```jsx
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark, vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

function CustomCode({inline, className, children, ...props}){

    //? Expresion regular que comprueba que el className coincida con 'language-**' y extrae el leguaje
    const match = /language-(\w+)/.exec(className || '');

    const lang = match ? match[1] : undefined;

    //? Remplazamos todos los \n al final de linea que haya
    const code = String(children).replace(/\n$/, '');

    return (<>
    
        { !inline && match ?  
        
            <SyntaxHighlighter language={lang} children={code} style={vscDarkPlus} PreTag="div" {...props} />

            :

            <code className={className} {...props}>{children}</code>
        }
    </>);
}

export default CustomCode;
```