
import { useRef } from "react";
import { Form } from "react-bootstrap";
import FileLoader from "./FileLoader";


function EditorMarkdown({defaultValue, onChange, style}) {

    const editor = useRef(null);

    const change = ({target: {value}}) => {

        console.log('change');

        onChange(value);
    }

    const tabulation = ({key, nativeEvent, target}) => {

        //* docs: https://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea

        if(key === 'Tab'){

            nativeEvent.preventDefault();
            
            //? caret position
            let start = target.selectionStart;
            let end = target.selectionEnd;
            
            //? Set textarea value to: text before caret + tab + text after caret
            target.value = target.value.substring(0, start) + "\t" + target.value.substring(end);

            //? Put caret at right position again
            target.selectionEnd = start + 1;
        }
    }


    const load = (value) => {

        editor.current.value = value;

        onChange(value);
    }

    return (<div className="EditorMarkdown py-2">
    
        <div className="position-relative">

            <div className="position-absolute top-0 end-0 px-4 d-flex justify-content-end">
                <FileLoader onChange={load}></FileLoader>
            </div>

            <div>
                <Form.Control as="textarea" style={{overflow: 'visible', resize: 'none', cursor: 'text', ...style}} defaultValue={defaultValue} onKeyUp={change} onKeyDown={tabulation} ref={editor} />
            </div>

        </div>
    
    </div>);
}

export default EditorMarkdown;