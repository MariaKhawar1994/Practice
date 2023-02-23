// Mounting is when you want to add and show the components on webpage, basically putting html elements into dom.
// there are 4 mounting methods
// 1. constructor()
// 2. getDerivedStateFromProps()
// 3. render()
// 4. componentDidMount()

import React, { Component } from 'react';

// getDerivedStateFromProps() example
export class DerivedState extends Component {
    constructor(props) {
        super(props);
        this.state={
            // here is constructor methos is used
            name:"Constructor"
        }
    }    
    static getDerivedStateFromProps(props, state) {
      return{
        name: props.nameFromParent
      }
    }
    // here is render method is used 
    render() {
        return (
            <div>
                <p>This is {this.state.name}</p>
            </div>
        )
    }
}
export default class getDerivedStateFromPropsMethods extends Component{
    render(){
        return(
            <div>
                <DerivedState  nameFromParent="get Derived State From Props Methods"/>
            </div>
        )
    }
}