
//? Bootstrap y Bootstrap icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RenderMarkdown from "./components/RenderMarkdown/RenderMarkdown";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import ShowCode from "./components/ShowCode";
import EditorMarkdown from "./components/EditorMarkdown/EditorMarkdown";

//? Archivos md de prueba
import markdown from "./assets/markdown.md";
import code from "./assets/code.md";
import codes from "./assets/codes.md";
import EditorCode from "./components/EditorCode";


function App() {

  const [text, setText] = useState('');

  useEffect(() => {
        
    fetch(markdown)
    .then(res => res.text())
    .then(value => setText(value))

  }, []);

  return (
    <div className="App bg-dark p-2" style={{minHeight: '100vh'}}>

      {/* <Container fluid={true}>

        <Row>
          <Col xs={6}>
            <EditorMarkdown style={{height: '700px'}} defaultValue={text} onChange={(value) => setText(value)}></EditorMarkdown>
          </Col>

          <Col xs={6}>
            <RenderMarkdown text={text} style={{maxHeight: '700px', overflow: 'auto'}}></RenderMarkdown>
          </Col>
        </Row>

      </Container> */}

      <EditorCode></EditorCode>

    </div>
  );
}

export default App;
