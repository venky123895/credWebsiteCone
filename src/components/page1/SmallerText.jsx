import React from 'react'

const SmallerText = (props) => {
  return (
    <div>
        <p style={props.style}>{props.text}</p>
    </div>
  )
}

export default SmallerText