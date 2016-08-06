import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/hello.jsx';
import World from './src/world.jsx';

ReactDOM.render(<span><Hello/> <World/></span>, document.getElementById('helloWorld'));
ReactDOM.render(<span><Hello text="Greetings"/> <World text="Humans"/></span>, document.getElementById('greetingsHuman'));