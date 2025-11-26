import React, { useState } from 'react'

const Usestate = () => {
    const[count, setCount]= useState(false)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>ADD</button>


      
      



    </div>
  )
}

export default Usestate
