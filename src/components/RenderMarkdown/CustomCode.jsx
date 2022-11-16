import { useEffect, useState } from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight, duotoneLight,  vscDarkPlus, dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import useTheme from '../../hooks/useTheme';

function CustomCode({inline, className, children}){

    const [theme] = useTheme();

    const [style, setStyle] = useState(undefined);

    useEffect(() => {
        
        if(theme === 'dark') setStyle(dracula);

        if(theme === 'light') setStyle(duotoneLight);

    }, [theme]);

    //? Expresion regular que comprueba que el className coincida con 'language-**' y extrae el leguaje
    const match = /language-(\w+)/.exec(className || '');

    const lang = match ? match[1] : undefined;

    //? Remplazamos todos los \n al final de linea que haya
    const code = String(children).replace(/\n$/, '');

    return (<>
    
        { !inline && match ?  
        
            <SyntaxHighlighter language={lang} children={code} style={style} customStyle={{margin: 0, padding: 0, background: 'transparent'}} PreTag="div"/>

            :

            <code className={className}>{children}</code>
        }
    
    </>);
}


export default CustomCode;