import React from 'react'
function Body(props) {
  return (
    <>
    {props.listitems.map((hero)=>(
        <li className="list-group-item">
            {hero}
        </li>
    ))}
    </>
  )
}

export default Body;