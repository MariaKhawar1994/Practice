
import './App.css';
import Mounting from './Mounting'
import MountingMethod from './MountingMethod';
import Updating from './Updating';
import Unmounting from './Unmounting'
import List from './List';
import Form from './Form';
import Hook from './Hook';
import Hoc from './Hoc';
import Child from './Child';
function App() {
  return (
    <div className="App">
     <h1 style={{color:'#0000ff'}}>LifeCycle Methods</h1>
     <h2 style={{color:'brown'}}>Mounting</h2>
     <h3 style={{color:'#800080'}}>Updating</h3>
     <h4 style={{color:'#000080'}}>Unmounting</h4>
      <Mounting/>
     <MountingMethod/>
    <Updating/> 
     <Unmounting/> 
     <hr/>
     <List/>
     <hr/>
     <h1 style={{color:'teal'}}>Two Input Fields with Submit Button</h1>
     <Form/>
     <hr/>
     <h1 style={{color:'#5a5a5a'}}>Using Hooks Functional Components</h1>
     <Hook/>
     <hr/>
     <Hoc/>
     <hr/>
     <Child name='React UI Programming'>
      <h6>Here is a programming world</h6>
     </Child>
    </div>
  );
}

export default App;
