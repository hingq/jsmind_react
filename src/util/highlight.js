import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import cpp from 'highlight.js/lib/languages/cpp';
import plaintext from 'highlight.js/lib/languages/plaintext';
import c from 'highlight.js/lib/languages/c';
import css from 'highlight.js/lib/languages/css';
import ts from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript',ts)
hljs.registerLanguage('cpp',cpp)
hljs.registerLanguage('plaintext',plaintext)
hljs.registerLanguage('c',c)
hljs.registerLanguage('css',css)

export default hljs