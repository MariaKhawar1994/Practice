import React from 'react'
const Child = (props) => {

    return (
    <div>
{props.name}
<h1>{props.children}</h1>
    </div>
  )
}

export default Child;