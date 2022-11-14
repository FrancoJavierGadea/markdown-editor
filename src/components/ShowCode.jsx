import { useState } from "react";
import { Form } from "react-bootstrap";


import SyntaxHighlighter from "react-syntax-highlighter";

import { Prism } from "react-syntax-highlighter";

//? Estilos para Highlight js
import * as hljs from 'react-syntax-highlighter/dist/esm/styles/hljs';

//? Estilos para Prism js
import * as prism from 'react-syntax-highlighter/dist/esm/styles/prism';



//! Codigo de ejemplo para probar
import * as example from "../assets/codes";

function ShowCode() {

    const [code, setCode] = useState(example.css);

    const [lang, setLang] = useState('css');

    const [style, setStyle] = useState(undefined);

    const [mode, setMode] = useState('hljs');

    const [lineNumbers, setLineNumbers] = useState(false);


    const changeMode = () => {

        setMode(mode === 'hljs' ? 'prism' : 'hljs');

        setStyle(undefined);
    }

    const changeStyle = ({target: {selectedIndex, options}}) => {

        let value = options[selectedIndex].value;

        if(selectedIndex !== 0){

            if(mode === 'hljs') setStyle(hljs[value]);

            if(mode === 'prism') setStyle(prism[value]);
        }
        else {
            setStyle(undefined);
        }

    }

    return (<div className="ShowCode">

        <div className="d-flex align-items-center py-2">

            <input className="btn btn-secondary me-2" style={{minWidth: '100px'}} type="button" value={mode} onClick={changeMode} />

            <Form.Select onChange={changeStyle}>
                <option>Selecciona un estilo de {mode}</option>

                { mode === 'hljs' ? Object.keys(hljs).map(value => <option value={value} key={'hljs - ' + value}>{value}</option>) : '' }

                { mode === 'prism' ? Object.keys(prism).map(value => <option value={value} key={'prism - ' + value}>{value}</option>) : '' }

            </Form.Select>

            <Form.Check className="ms-2 text-light" style={{minWidth: '250px'}} type="switch" label="Mostrar numero de linea" checked={lineNumbers} onChange={(e) => setLineNumbers(e.target.checked)}/>
        </div>

        <div style={{display: 'flow-root'}}>

            { mode === 'hljs' ? <SyntaxHighlighter language={lang} style={style} showLineNumbers={lineNumbers}>{code}</SyntaxHighlighter> : '' }
            
            { mode === 'prism' ? <Prism language={lang} style={style} showLineNumbers={lineNumbers}>{code}</Prism> : '' }

        </div>

    </div>);
}

export default ShowCode;