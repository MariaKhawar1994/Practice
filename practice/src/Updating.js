// there are 5 methods
// 1. getDerivedStateFromProps()
// 2. shouldComponentUpdate()
// 3.render()
// 4. getSnapShotBeforeUpdate()
// 5.componentDidMount()


// here is an example of getSnapShotBeforeUpdate() method
import React, { PureComponent } from 'react';

class Updating extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            name:"Constructor"
        }}
        // here is should component update () method
        shouldComponentUpdate() {
            return true;
          }
        //   here id component did mount() method
        componentDidMount () {
          setTimeout(()=>{
            this.setState({name:"This is get snap shot before update"})
          }, 10000)
        }
        // here is get Snap shot Before Update () method
        getSnapshotBeforeUpdate(prevProps,prevState){
            document.getElementById('previous-state').innerHTML="It was previous state: "+ this.state.name
        }
        // here is ComponentDidUpdate () method
        componentDidUpdate() {
            document.getElementById('current-state').innerHTML="This is current state: "+ this.state.name
        }
        // here is render () method
    render() {
        return (
            <div>
                <p>this is {this.state.name}</p>
                <p id="current-state"></p>
                <p id="previous-state"></p>
            </div>
        );
    }
}

export default Updating;
