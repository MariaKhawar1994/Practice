import { useState } from 'react';
function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("This is a React App");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{fontSize:'24px', color:'purple'}}>Enter your Name:
        <br/>
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange} 
      />
      <br/>
      </label>
      <br/>
      <br/>
      <label style={{fontSize:'24px', color:'purple'}}>Enter your age:
        <br/>
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        <br/>
        </label>
        <br/>
        <br/>
        <input style={{fontSize:'30px', color:'blue', backgroundColor:'pink'}} type="submit" />
    </form>
  )
}
export default Form;