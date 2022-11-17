
import { Form } from "react-bootstrap";


function EditorMarkdown({value, onChange, style}) {

    const change = ({target: {value}}) => {

        onChange(value);
    }

    return (<div className="EditorMarkdown py-2">

        <Form.Control as="textarea" style={{overflow: 'visible', resize: 'none', cursor: 'initial', ...style}} defaultValue={value} onKeyUp={change} />

    </div>);
}

export default EditorMarkdown;