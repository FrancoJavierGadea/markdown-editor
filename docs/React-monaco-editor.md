# React Monaco Editor

#### Instalacion

```console
npm install @monaco-editor/react 
```

#### Uso

```jsx
import Editor from "@monaco-editor/react";

function App() {

    return (<div className="App">

        <Editor height="90vh" defaultLanguage="javascript" defaultValue="//some code comment" />

    </div>);
}
```

## Propiedades `options`

Con la prop `options` podemos controlador diversas configuraciones al momento de crear el `<Editor />`

Alguna de ellas son:

```json
{
    "padding": {
        "top": "20px",
        "bottom": "20px"
    },

    "lineNumbers": "on",

    "scrollbar": {
        "vertical": "auto"
    },

    "scrollBeyondLastLine": false,

    "minimap": {
        "enabled": false
    },

    "roundedSelection": false
}
```

Podemos consultar estas propiedades en: 

- [https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html)

- [https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorOptions.html](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IEditorOptions.html)

> Sin embargo no todas la propidades tendran efecto al momento de crear el `<Editor />`
>
> `react-monaco-editor` prioriza el valor de algunas **props** sobre la prop `options`
> 
> - `defaultValue` y `value` sobre `options.value`
> - `defaultLanguage` y `language` sobre `options.language`


## Referencias a `editor` y a `monaco`

Con el metodo `onMount` que se ejecuta luego de que se monte el componente `<Editor />` podemos obtener referencias a **la instacia de `editor`** que creamos y **objeto global `monaco`** con los cuales podemos realizar numerosas configuraciones

```jsx
import { useRef } from "react";
import Editor from "@monaco-editor/react";

function App() {

    const editorRef = useRef(null);

    const monacoRef = useRef(null);

    const editorOnMount = (editor, monaco) => {

        editorRef.current = editor;

        monacoRef.current = monaco; 
    }

    return (<div className="App">

        <Editor height="90vh" defaultLanguage="javascript" onMount={editorOnMount} />

    </div>);
}
```

### Obtener el codigo

Para obtener el codigo escrito en el `<Editor />` podemos usar el evento `onChange`

```jsx
import { useState } from "react";
import Editor from "@monaco-editor/react";

function App() {

    const [code, setCode] = useState("//some code comment");

    const editorOnChange = (value, event) => {

        setCode(value);
    }

    return (<div className="App">

        <Editor defaultLanguage="javascript" defaultValue={code} onChange={editorOnChange} />

    </div>);
}
```

Tambien podemos usar la referencia a **la instancia del `editor`**

```jsx
import { useState } from "react";
import Editor from "@monaco-editor/react";

function App() {

    const editorRef = useRef(null);

    const monacoRef = useRef(null);

    const editorOnMount = (editor, monaco) => {

        editorRef.current = editor;

        monacoRef.current = monaco; 
    }

    const getCode = () => {

        console.log( editorRef.current.getValue() );
    }

    return (<div className="App">

        <Editor defaultLanguage="javascript" defaultValue="// some js code" onMount={editorOnMount} />

    </div>);
}
```

#### Cambiar el language

Para cambiar establecer y actualizar el lenguaje podemos usar la prop `language`

```jsx
import Editor from "@monaco-editor/react";

function App() {

    const [lang, setLang] = useState("");

    return (<div className="App">

        <Editor height="90vh" language={lang} />

    </div>);
}
```

Si intentanmos usar `editor.updateOptions()` para cambien el lenguaje no funcionara

```js
editor.updateOptions({
	theme: 'css'
});
```

La alternativa a usar y que funciona es 

```js
monaco.editor.setModelLanguage(editor.getModel(), 'css');
```

```jsx
import Editor from "@monaco-editor/react";

function App() {

    const editorRef = useRef(null);

    const monacoRef = useRef(null);

    const editorOnMount = (editor, monaco) => {

        editorRef.current = editor;

        monacoRef.current = monaco; 
    }

    const changeLanguage = (lang) => {

        monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), lang);
    }
    
    return (<div className="App">

        <Editor height="90vh" onMount={editorOnMount} />

    </div>);
}
```

## Temas

Los **Temas** por defecto son `light` y `vs-dark`

Para agregar mas **Temas** nesesitamos usar `monaco.editor.difineTheme` el cual nos permite definir una **Tema** personalizado

```js
monaco.editor.defineTheme('myTheme', {
	base: 'vs',
	inherit: true,
	rules: [{ background: 'EDF9FA' }],
	colors: {
		'editor.foreground': '#000000',
		'editor.background': '#EDF9FA',
		'editorCursor.foreground': '#8B0000',
		'editor.lineHighlightBackground': '#0000FF20',
		'editorLineNumber.foreground': '#008800',
		'editor.selectionBackground': '#88000030',
		'editor.inactiveSelectionBackground': '#88000015'
	}
});
```
> Mas en [https://microsoft.github.io/monaco-editor/playground.html#customizing-the-appearence-exposed-colors](https://microsoft.github.io/monaco-editor/playground.html#customizing-the-appearence-exposed-colors)

Tambien podemos recurrir a [monaco-themes](https://github.com/brijeshb42/monaco-themes)

```console
npm install monaco-themes
```

```jsx
import Editor from "@monaco-editor/react";
import Dracula from "monaco-themes/themes/Dracula.json";

function App() {

    const editorOnMount = (editor, monaco) => {

        monaco.editor.defineTheme('dracula', Dracula);

        monaco.editor.setTheme('dracula');
    }

    return (<div className="App">

        <Editor onMount={editorOnMount} />

    </div>);
}
```

#### Cambiar Temas

Para establecer un **Tema** usamos la referencia a `monaco`:

```js
monaco.editor.setTheme(<theme_name>);
```

```jsx
import Editor from "@monaco-editor/react";

function App() {

    const editorRef = useRef(null);

    const monacoRef = useRef(null);

    const editorOnMount = (editor, monaco) => {

        editorRef.current = editor;

        monacoRef.current = monaco; 
    }

    const changeTheme = (theme) => {

        monacoRef.current.editor.setTheme(value);
    }
    
    return (<div className="App">

        <Editor height="90vh" onMount={editorOnMount} />

    </div>);
}
```

Tambien podemos usar la prop `theme` para establecer y cambiar de **Tema**

```jsx
<Editor height="90vh" theme={<theme_name>} />
```

```jsx
import Editor from "@monaco-editor/react";

function App() {

    const [theme, setTheme] = useState("vs-dark");

    return (<div className="App">

        <Editor height="90vh" theme={theme} />

    </div>);
}
```

#### Docs

- [https://github.com/suren-atoyan/monaco-react](https://github.com/suren-atoyan/monaco-react)
- [https://microsoft.github.io/monaco-editor](https://microsoft.github.io/monaco-editor)
- [https://github.com/brijeshb42/monaco-themes](https://github.com/brijeshb42/monaco-themes)
