import React from 'react';
 
class Hello extends React.Component {
  static get defaultProps() {
    return {
      text: 'Hello'
    }
  }
  
  render() {
    return <span>{this.props.text}</span>
  }
}

export default Hello;