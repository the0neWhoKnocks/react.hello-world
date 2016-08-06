import React from 'react';
import ReactDOM from 'react-dom';
 
class World extends React.Component {
  static get defaultProps() {
    return {
      text: 'World'
    }
  }
  
  render(){
    return <span>{this.props.text}</span>
  }
}

export default World;