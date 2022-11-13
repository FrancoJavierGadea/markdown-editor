
//? Bootstrap y Bootstrap icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RenderMarkdown from "./components/RenderMarkdown";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import file from "./assets/markdown.md";

function App() {

  const [text, setText] = useState('');

  useEffect(() => {
        
    fetch(file)
    .then(res => res.text())
    .then(value => setText(value))

  }, []);

  return (
    <div className="App bg-dark p-2" style={{minHeight: '100vh'}}>

      <Container>

        <RenderMarkdown text={text} style={{maxHeight: '700px', overflow: 'auto'}}></RenderMarkdown>

      </Container>

    </div>
  );
}

export default App;
