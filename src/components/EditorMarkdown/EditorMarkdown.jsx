
import Editor from "@monaco-editor/react";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import FileLoader from "./FileLoader";


function EditorMarkdown({defaultValue, onChange, height}) {

    const options = {
        padding: {
            top: "20px",
            bottom: "10px"
        },

        scrollbar: { 
            vertical: 'auto' 
        },

        scrollBeyondLastLine: false,

        minimap: { 
            enabled: false 
        }
    }

    const editorRef = useRef(null);

    
    const change = () => {
        
        console.log('change');
        
        onChange(editorRef.current.getValue());
    }
    
    const onMount = (editor, monaco) => {

        editor.onKeyUp(change);

        editorRef.current = editor;
    }
    
    const load = (value) => {

        editorRef.current.getModel().setValue(value);

        onChange(value);
    }

    return (<div className="EditorMarkdown py-2">
    
        <div className="position-relative">

            <div className="position-absolute top-0 end-0 px-4 d-flex justify-content-end" style={{zIndex: 1000}}>
                <FileLoader onChange={load}></FileLoader>
            </div>

            <div className="overflow-hidden rounded">
                <Editor height={height} theme="vs-dark" language="markdown" defaultValue={defaultValue} onMount={onMount} options={options} />
            </div>

        </div>
    
    </div>);
}

export default EditorMarkdown;