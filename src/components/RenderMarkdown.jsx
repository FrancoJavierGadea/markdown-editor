import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function RenderMarkdown({text, style}){

    const [mode, setMode] = useState('markdown');

    const markdownContainerRef = useRef(null);

    const [html, setHtml] = useState('');

    useEffect(() => {
        
        setHtml(markdownContainerRef.current.innerHTML);

    }, [mode]);

    const changeModes = () => {
        const modes = ['markdown', 'html', 'raw'];

       let index = modes.indexOf(mode) + 1 === modes.length ? 0 : modes.indexOf(mode) + 1;

       setMode(modes[index]);
    }

    return (<div className="RenderMarkdown">

        <div className="position-relative">

            <div className="position-absolute top-0 end-0 px-4 d-flex justify-content-end">
            
                <label style={{fontSize: '28px'}}>

                    {mode === 'markdown' ? <i className="bi bi-markdown"></i> : ''}

                    {mode === 'html' ? <i className="bi bi-filetype-html"></i> : ''}

                    {mode === 'raw' ? <i className="bi bi-filetype-raw"></i> : ''}

                    <input type="button" className="d-none" value="" onClick={changeModes} />
                </label>
            
            </div>

            <div className="bg-light my-2 p-2 rounded" style={{display: 'flow-root', minHeight: '50px' , ...style}}>

                <div className={mode !== 'markdown' ? 'd-none' : ''} ref={markdownContainerRef}>

                    <ReactMarkdown children={text} remarkPlugins={[remarkGfm]}></ReactMarkdown>

                </div>

                { mode === 'raw' ? <pre>{text}</pre> : ''}

                { mode === 'html' ? <pre className="m-0 overflow-visible"><code>{html}</code></pre> : ''}
            </div>
        </div>
   
    </div>);
}

export default RenderMarkdown;