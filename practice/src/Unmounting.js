// Unmounting is whenever we want to remove component from DOM
// It has only one method
// ComponentWillUnmount()
import React, { PureComponent } from 'react';
export class Unmounting extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {show: true}; //use toggle
    }
    render() {
      return (
        <div>
        <p>{this.state.show ? <Child/> : null}</p>
        <button type="button" onClick={() =>{this.setState({show:! this.state.show})}}
         style={{fontSize:'24px', color:'blue',backgroundColor:'lime'}}>
            Clickable button</button>
        </div>
      );
    }
  }
  export class Child extends PureComponent {
    componentWillUnmount() {
      alert("The component named Header is about to be unmounted.");
    }
    render() {
      return (
        <h1>Here is Unmounting </h1>
      )
    }
  }
  export default Unmounting;