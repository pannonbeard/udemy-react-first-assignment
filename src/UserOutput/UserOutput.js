import React from 'react'

const userOutput = ({user}) =>{
  const style = {
    h2: {
      backgroundColor: 'lime',
      margin: '0, 0, 10px, 0',
      padding: '10px'
    }
  }

  return(
    <div>
      <h2 style={style.h2}>By {user}</h2>
      <p>blahb blha</p>
      <p>blhab blah</p>
    </div>
  )
}
  

export default userOutput