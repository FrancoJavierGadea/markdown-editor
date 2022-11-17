
import { Form } from "react-bootstrap";


function EditorMarkdown({value, onChange, style}) {

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

    return (<div className="EditorMarkdown py-2">

        <Form.Control as="textarea" style={{overflow: 'visible', resize: 'none', cursor: 'text', ...style}} defaultValue={value} onKeyUp={change} onKeyDown={tabulation} />

    </div>);
}

export default EditorMarkdown;