import React from 'react'

function Empty(props) {
  return (
    <>
        {props.listitems.length === 0 && <h3>IAM HUNGRY PLEASE FEED ME</h3>}
    </>
  )
}

export default Empty;