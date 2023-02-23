import React from 'react'

function Name(props) {
    return <li>I am a { props.people }</li>;
  }
  
  function List() {
    const names = [
      {id: 1, people: 'React JS'},
      {id: 2, people: 'JavaScript'},
      {id: 3, people: 'HTML'},
      {id:4, people: 'CSS'}
    ];
    return (
        // using fragments, it is a way to group of list of children without adding extra DOM nodes
      <>
        <h1 style={{fontSize:'40px', color:'#2fa33c'}}>Computer Programming Languages</h1>
        <ul style={{color:'darkgreen', fontSize:'24px'}}>
          {names.map((name) => <Name key={name.id} people={name.people} />)}
        </ul>
      </>
    );
  }
  export default List;