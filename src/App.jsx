
//? Bootstrap y Bootstrap icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useEffect, useState } from "react";

import Split from "react-split";
import EditorMarkdown from "./components/EditorMarkdown/EditorMarkdown";
import RenderMarkdown from "./components/RenderMarkdown/RenderMarkdown";

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
    <div className="App bg-dark" style={{minHeight: '100vh'}}>

      <Split className="split" sizes={[50, 50]} minSize={300} direction="horizontal" gutterSize={8} gutterAlign="center">

        <EditorMarkdown height="100vh" defaultValue={text} onChange={(value) => setText(value)}></EditorMarkdown>

        <RenderMarkdown text={text} style={{maxHeight: '100vh', overflow: 'auto'}}></RenderMarkdown>

      </Split>

    </div>
  );
}

export default App;
