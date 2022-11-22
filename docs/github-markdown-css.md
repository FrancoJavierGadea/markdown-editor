# Github markdown css

Es un proyecto de github que nos proporciona el `css` necesario para aplicar el `markdown theme` que usa **github**

#### Instalacion

```console
> npm install github-markdown-css
```

#### Uso

Para usarlo solo debemos importar el `css` de `github-markdown-css`, hay 3 `markdown themes`:

- `github-markdown.css` : detecta a atrave de la `Media Query` `prefers-color-scheme` el `theme` de navegador
- `github-markdown-dark.css` : solo dark
- `github-markdown-light.css` : solo light

```js
import "github-markdown-css/github-markdown.css";

import "github-markdown-css/github-markdown-dark.css";

import "github-markdown-css/github-markdown-light.css";
```

Una vez importado el `css` solo debemos agregar la clase `markdown-body` al elemento que contenga nuestro `markdown` ya renderizado

```html
<div class="markdown-body">

</div>
```

#### Docs

- [https://github.com/sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)



# Detectando el `theme` del navegador

Para hacer esto tenes que consultar la `Media Query` `prefers-color-scheme` de la siguiente manera

```js
let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
```

Tambien podemos agregar un `event listener` para detectar si cambia el `theme` del navegador mientras la pagina esta abierta

```js
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    
    theme = e.matches ? 'dark' : 'light';
}); 
```

#### Docs

- [https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript](https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript)