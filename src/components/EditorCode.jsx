import { useEffect, useRef, useState } from "react";

import Editor from "@monaco-editor/react";

import { THEMES } from "../assets/Monaco/ThemesForMonaco";

import * as codes from "../assets/codes";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { LANGUAGES } from "../assets/Monaco/MonacoLanguages";

function EditorCode() {

    const [code, setCode] = useState(codes.javascript);

    const [options, setOptions] = useState({

        padding: {
            top: "20px",
            bottom: "20px"
        },

        lineNumbers: 'on',

        scrollbar: { vertical: 'auto' },

        scrollBeyondLastLine: false,

        minimap: { enabled: false },

        roundedSelection: false,
    });

    const [theme, setTheme] = useState("vs-dark");

    const [language, setLanguage] = useState("javascript");

    const editorRef = useRef(null);

    const monacoRef = useRef(null);

    useEffect(() => {
        


    }, []);


    const change = (value, event) => {

        //console.log(value);

        console.log( editorRef.current.getValue() );
    }


    const onMount = (editor, monaco) => {

        //* Setting the themes
        THEMES.forEach(({name, theme}) => {

            monaco.editor.defineTheme(name, theme);
        })

        editorRef.current = editor;
        monacoRef.current = monaco; 
    }

    const changeTheme = ({target: {selectedIndex, options}}) => {

        let value = options[selectedIndex].value;

        setTheme(value);

        //monacoRef.current.editor.setTheme(value);
    }

    const changeLanguage = ({target: {selectedIndex, options}}) => {

        let value = options[selectedIndex].value;

        setLanguage(value);

        //monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), value);
    }


    //! Cambiar las opciones
    const optRef = useRef(null);

    const changeOptions = () => {

        setOptions( JSON.parse(optRef.current.getValue()) );
    }


    return (<div className="EditorCode">

        <div className="d-flex py-2">

            <Form.Select className="me-2" onChange={changeTheme} value={theme}>
                <option value={"vs-dark"}>Selecciona un tema</option>
                
                <option value={"vs-dark"}>{"vs-dark"}</option>

                <option value={"light"}>{"vs-light"}</option>

                <optgroup label="light">
                    { THEMES
                        .filter(value => value.theme.base === 'vs')
                        .map(value => <option value={value.name} key={value.name}>{value.name}</option>)
                    }
                </optgroup>

                <optgroup label="dark">
                    { THEMES
                        .filter(value => value.theme.base === 'vs-dark')
                        .map(value => <option value={value.name} key={value.name}>{value.name}</option>)
                    }   
                </optgroup>

            </Form.Select>



            <Form.Select className="ms-2" onChange={changeLanguage} value={language}>
                <option value={"javascript"}>Selecciona un Lenguaje</option>

                <option value={""}>plain text</option>

                { LANGUAGES.map(value => <option value={value.name} key={value.name}>{value.name}</option>) }    
            
            </Form.Select>       

        </div>

        <Container fluid={true}>
            <Row>
                <Col xs={9} className="ps-0 pe-1">

                    <Editor theme={theme} language={language} height="90vh" defaultValue={code} options={options} onChange={change} onMount={onMount}/>   
                
                </Col>

                <Col xs={3} className="ps-1 pe-0">

                    <Editor theme={theme} height="50vh" language="json" value={JSON.stringify(options, null, 4) }  onMount={ (editor, monaco) => {optRef.current = editor} } options={{ lineNumbers: 'off', scrollbar: { vertical: 'auto' }, scrollBeyondLastLine: false, minimap: { enabled: false }} } />

                    <div className="p-2 d-flex justify-content-center">
                        <Button className="px-5" onClick={changeOptions}>Aplicar</Button>
                    </div>

                    <div className="p-2 d-flex justify-content-center">
                        <a href="https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorOptions.html" target="_blank" rel="noopener noreferrer">Consultar las opciones</a>
                    </div>    
                </Col>    
            </Row>
        </Container>            

    </div>);
}

export default EditorCode;