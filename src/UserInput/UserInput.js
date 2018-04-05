import React from 'react'

const userInput = (props) => {
  const style = {
    padding: '10px 15px',
    border: '1px solid #eee',
    font: 'inherit',
    borderRadius: '5px',
    marginBottom: '10px'
  }

  return(
    <input type='text' onChange={props.eventHandler} value={props.user} style={style}/>
  ) 
}

export default userInput
