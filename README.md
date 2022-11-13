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

function RenderMarkdown({text, style}){

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





#### Docs
- [https://www.markdownguide.org](https://www.markdownguide.org)
- [https://joedicastro.com/pages/markdown.html](https://joedicastro.com/pages/markdown.html)
- [https://github.com/unifiedjs/unified](https://github.com/unifiedjs/unified)
- [https://github.com/remarkjs/remark](https://github.com/remarkjs/remark)
- [https://github.com/remarkjs/react-markdown](https://github.com/remarkjs/react-markdown)
- [https://github.com/remarkjs/remark-gfm](https://github.com/remarkjs/remark-gfm)