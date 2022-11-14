# React syntax highlighter

Nos permite mostrar codigo resaltando la sintaxis del lenguaje

Utiliza de fondo [`highlightjs`](https://highlightjs.org/) por defecto y tambien [`prismjs`](https://prismjs.com/) las 2 principales librerias para resaltar sintaxis de codigo

#### Uso

Importamos Componente `SyntaxHighlighter` de `react-syntax-highlighter` y los estilos css de `hljs`

Definimos el `language`, el `style` de `hljs` que vamos a usar, si queremos que se numeren las lineas `showLineNumbers`, y pasamos como content `children` el codigo

```js
//Componente
import SyntaxHighlighter from "react-syntax-highlighter";

//Estilos css de highlightjs
import * as hljs from 'react-syntax-highlighter/dist/esm/styles/hljs';

const js = `
    console.log('Usando react-syntax-highlighter');
`;

function App(){
    
    const [code, setCode] = useState(js);

    return (<div>
    
        <SyntaxHighlighter language={'javascript'} style={hljs.darcula} showLineNumbers={true}>{code}</SyntaxHighlighter>
    </div>);
}

export default App;
```

> Este Componente esta optimizado para usar `highlightjs` por defecto, por lo que si intentamos pasarle estilos de `prismjs` no funcionara


#### Usando `prismjs`

Para usar `prismjs` debemos importar `Prism` de `react-syntax-highlighter` y los estilos css de `prism`

```js
//Componente
import { Prism } from "react-syntax-highlighter";

//Estilos css de prismjs
import * as prism from 'react-syntax-highlighter/dist/esm/styles/prism';
```

El componente `Prism` es el indicado para trabajar con `prismjs`, en ensencia de `props` es equivalente a `SyntaxHighlighter` por lo que podemos renombrar el import y mantener todo bajo el nombre `SyntaxHighlighter`

```js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
```

#### Ventajas de `Prism` sobre `highlightjs`

- `Prism` soporta la sintaxis de `react` con `jsx`

#### Docs

- [https://github.com/react-syntax-highlighter/react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- [https://highlightjs.org/](https://highlightjs.org/)
- [https://prismjs.com/](https://prismjs.com/)