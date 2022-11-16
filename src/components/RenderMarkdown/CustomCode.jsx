import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark, vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

function CustomCode({inline, className, children}){

    //? Expresion regular que comprueba que el className coincida con 'language-**' y extrae el leguaje
    const match = /language-(\w+)/.exec(className || '');

    const lang = match ? match[1] : undefined;

    //? Remplazamos todos los \n al final de linea que haya
    const code = String(children).replace(/\n$/, '');

    return (<>
    
        { !inline && match ?  
        
            <SyntaxHighlighter language={lang} children={code} style={vscDarkPlus} PreTag="div"/>

            :

            <code className={className}>{children}</code>
        }
    
    </>);
}


export default CustomCode;