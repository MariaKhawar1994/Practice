// A higher-order component (HOC) is an advanced element for reusing logic in React components. 
// Components take one or more components as arguments, and return a new upgraded component. 
import React,{useState} from 'react';

//functional component
function Hoc() {
    const[count,setCount]=useState(0);
  return (
<div>
<h1>Higher Order Component</h1>
<HOCGreen cmp={counter}/>
<HOCRed cmp={counter}/>
</div>
    );


function HOCGreen(props){
  return<h2 style={{color:'green'}}> Green props here:<props.cmp/></h2>

}
function HOCRed(props){
  return<h2 style={{color:'red'}}>Red props here:<props.cmp/></h2>
}
function counter(){
 
  return(
    <div>
    <h1>{count}</h1>
      <button style={{color:'darkblue', fontSize:'24px'}} onClick={()=>setCount(count+1)}>counter</button>

    </div>
  )
}
}
export default Hoc;