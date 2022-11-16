
//? Bootstrap y Bootstrap icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RenderMarkdown from "./components/RenderMarkdown/RenderMarkdown";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import ShowCode from "./components/ShowCode";

//? Archivos md de prueba
import markdown from "./assets/markdown.md";
import code from "./assets/code.md";
import codes from "./assets/codes.md";

function App() {

  const [text, setText] = useState('');

  useEffect(() => {
        
    fetch(codes)
    .then(res => res.text())
    .then(value => setText(value))

  }, []);

  return (
    <div className="App bg-dark p-2" style={{minHeight: '100vh'}}>

      <Container>
        {

          <RenderMarkdown text={text} style={{maxHeight: '700px', overflow: 'auto'}}></RenderMarkdown>

          //<ShowCode></ShowCode>
        }
      </Container>

    </div>
  );
}

export default App;
