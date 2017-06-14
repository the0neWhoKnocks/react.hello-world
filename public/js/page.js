var components = bizNamespace.default.components;
var container = React.createElement('div', { className:'container' },
  React.createElement(components.HelloWorld),
  React.createElement('br'),
  React.createElement(components.HelloWorld, { 
    input1Val: 'Greetings',
    input1Placeholder: 'Greetings',
    input2Val: 'Humans',
    input2Placeholder: 'Humans'
  })
);

ReactDOM.render(container, document.getElementById('helloWorld'));