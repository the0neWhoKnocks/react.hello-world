import { Component } from 'react';
import { string } from 'prop-types';
 
class HelloWorld extends Component {
  
  constructor(opts){
    super(opts);
    
    this.propTypes = { 
      input1Val: string,
      input1Placeholder: string,
      input2Val: string,
      input2Placeholder: string
    };
    this.defaultProps = {
      input1Val: '',
      input1Placeholder: 'Hello',
      input2Val: '',
      input2Placeholder: 'World'
    };
    this.state = {
      input1Val: opts.input1Val || this.defaultProps.input1Val,
      input1Placeholder: opts.input1Placeholder || this.defaultProps.input1Placeholder,
      input2Val: opts.input2Val || this.defaultProps.input2Val,
      input2Placeholder: opts.input2Placeholder || this.defaultProps.input2Placeholder
    };
  }
  
  handleChange(ev){
    const el = ev.currentTarget;
    
    this.setState({
      [`${ el.name }Val`]: el.value
    });
  }
  
  render(){
    return (
      <div className="hello-world">        
        <input 
          className="hello-world__input"
          type="text" 
          name="input1"
          placeholder={ this.state.input1Placeholder } 
          value={ this.state.input1Val }
          onChange={ this.handleChange.bind(this) }
        />
        <input
          className="hello-world__input"
          type="text" 
          name="input2"
          placeholder={ this.state.input2Placeholder } 
          value={ this.state.input2Val }
          onChange={ this.handleChange.bind(this) }
        />
        <div className="hello-world__output">
          <h3>{ this.state.input1Val } { this.state.input2Val }</h3>
        </div>
      </div>
    );
  }
}

export default HelloWorld;