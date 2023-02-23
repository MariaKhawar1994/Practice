// this is an example of componentDidMount


import React, { PureComponent } from 'react';

class MountingMethod extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            name:'Constructor'
        }
    }
    componentDidMount = () => {
      setTimeout(()=>{
        this.setState({name:"This is Component Did Mount Method"})
      }, 3000)
    }
    
    render() {
        return (
            <div>
              {this.state.name}  
            </div>
        );
    }
}

export default MountingMethod;