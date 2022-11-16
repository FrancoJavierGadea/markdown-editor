# React Markdown

`react-markdown` toma un `string` con el texto en `markdown` y lo convierte a codigo `html` segun las pautas de `markdown`, por ejemplo:

- `# titulo` --> `<h1>Titulo</h1>`
- `## titulo` --> `<h2>Titulo</h2>`
- `texto solo` --> `<p>Parrafo</p>`
- `**Negrita**` --> `<p><strong>Negrita</strong></p>`
- `*Cursiva*` --> `<p><em>Cursiva</em></p>`

Mas sobre la sintaxis de `markdown` en: 
- [https://www.markdownguide.org](https://www.markdownguide.org)
- [https://joedicastro.com/pages/markdown.html](https://joedicastro.com/pages/markdown.html)

---

`react-markdown` esta basado y desarrollado por la misma gente de [`remarkjs`](https://remark.js.org/) una libreria para trabajar con `markdown`

Esta libreria utiliza, tiene como core, `remarkjs` para compilar `markdown` basico. Luego utiliza una serie de **plugins** para ampliar las funcionalidades y la sintaxis de `markdown`

Los **plugins** existentes son: 

- Los de `remark`: [https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins)

- Los de `rehype`: [https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins)

---

Detras de `remark` y `rehype` esta [`unifiedjs`](https://unifiedjs.com/), lo utilizando de fondo para manejar los **plugins** y toda la **transformacion** de `markdown` a `html` 

Por lo que si quieres manejarla y enterderla a fondo deberias darle un ojo a [https://github.com/unifiedjs/unified](https://github.com/unifiedjs/unified)

#### Instalacion

```console
> npm install react-markdown
```
#### Uso

Usar `react-markdown` es sumamente falcil, solo importamos el Componente `<ReactMarkdown />` de `react-markdown`, le pasamos en `children` el `string` con `markdown` y listo... al renderizar el Componente tendremos el `markdown` convertido a `html`

Si vamos a usar **plugins** de `remarkjs` o `rehype` debemos instalarlos previamente, importarlos y pasarlos en un `array` a las propiedades `remarkPlugins` y `rehypePlugins` respectivamente

```html
<ReactMarkdown children={ markdown_string } remarkPlugins={ plugins... }></ReactMarkdown>
```
#### Ejemplo

```js
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const md = `

# Markdown text

show [react-markdown](https://github.com/remarkjs/react-markdown)
`;

function RenderMarkdown(){

    const [text, setText] = useState(md);

    return (<div className="RenderMarkdown">

        <ReactMarkdown children={text} remarkPlugins={[remarkGfm]}></ReactMarkdown>
    </div>);
}
```

# Plugins

### `remark-gfm`

```console
> npm install remark-gfm
```

Añade y expande la sintaxis de markdown dando soporte para: 

- URLs
    ```md
    URL: https://github.com/remarkjs/remark-gfm
    ```

- Texto tachado
    ```md
    ~texto tachado~
    ```

- Listas con checkbox 
    ```md
    - [ ] listas con checks
    - [x] listas con checks
    ```

- Tablas
    ```md
    | column 1 | column 2 |
    | -------- | -------- |
    | value 11 | value 12 |
    | value 21 | value 22 |
    | value 31 | value 32 |
    ```



## Customizar el `html` generado

`react-markdown` nos permite personalizar que **Componentes** usar para crear el `html` a traves de la propiedad `components`, la cual recibe un objeto en el que indicamos que **Componente** usar para cada etiqueta `html` 

```html
<ReactMarkdown children={text} components={{ h1: CustomH1, code: CustomCode }} />
```

¿ Esto que significa ?

#### Ejemplo 1

Por defecto, cada vez que `react-markdown` se encuentra con un `# titulo` genera un `<h1>Titulo</h1>`.

Para cambiar esto, definimos un `Function Component` y utilizamos las `props` `children` y `className`

```js
function CustomH1({className, children}){

    return (
        <div className={className} style={{color: 'red'}}>{children}</div>
    );
}
```
y se la pasamos a `<ReactMarkdown />` en la propiedad `components` en `h1`

```js
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const md = `# titulo`;

function App(){

    const [text, setText] = useState(md);

    return (<div className="RenderMarkdown">

        <ReactMarkdown children={text} components={{ h1: CustomH1 }} />
    </div>)
}

export default App;
```

ahora todos los `h1` --> `# titulo` seran un `div` con el texto en color rojo

---

#### Ejemplo 2: Agregando Syntax Highlight

Por defecto cada vez que `react-markdown` se encuentra con:

```markdown
    `inline code`

    ```js
        console.log('block code');
    ```
```

Nos genera:

```html
<p><code>inline code</code></p>

<pre>
    <code class="language-js">console.log('block code');</code>
</pre>
```

La idea es agregar que use `React syntax highlighter` para los **bloques de codigo** y siga con lo por defecto para los **inline**

Esto lo hacemos creando un `Function Component` que dependiendo de si es `inline` o no, utilize `<SyntaxHighlighter />` o `<p><code></code></p>`

```js
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark, vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

function CustomCode({inline, className, children}){

    //? Expresion regular que comprueba que el className coincida con 'language-**' y extrae el leguaje
    const match = /language-(\w+)/.exec(className || '');

    const lang = match ? match[1] : undefined;

    //? Remplazamos todos los \n al final de linea que haya
    const code = String(children).replace(/\n$/, '');

    return (<>
    
        { !inline && match ?  
        
            <SyntaxHighlighter language={lang} children={code} style={vscDarkPlus} PreTag="div"/>

            :

            <code className={className}>{children}</code>
        }
    </>);
}

export default CustomCode;
```
> Mas sobre *Expresiones regulares* en: [https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)


Finalmente le indicamos a `react-markdown` que use `CustomCode` con la propiedad `components`

```js
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const md = `
\`inline code\`

\`\`\`js
console.log("block code");
\`\`\`
`;

function App(){

    const [text, setText] = useState(md);

    return (<div className="RenderMarkdown">

        <ReactMarkdown children={text} components={{ code: CustomCode }}></ReactMarkdown>
    </div>)
}

export default App;
```


#### Docs
- [https://www.markdownguide.org](https://www.markdownguide.org)
- [https://joedicastro.com/pages/markdown.html](https://joedicastro.com/pages/markdown.html)
- [https://github.com/unifiedjs/unified](https://github.com/unifiedjs/unified)
- [https://github.com/remarkjs/remark](https://github.com/remarkjs/remark)
- [https://github.com/remarkjs/react-markdown](https://github.com/remarkjs/react-markdown)
- [https://github.com/remarkjs/remark-gfm](https://github.com/remarkjs/remark-gfm)