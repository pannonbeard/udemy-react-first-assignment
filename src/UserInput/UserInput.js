import React from 'react'

const userInput = (props) =>
  <input type='text' onChange={props.eventHandler} value={props.user}/>

export default userInput
