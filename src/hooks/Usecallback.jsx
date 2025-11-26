import React, { useCallback, useState } from 'react'

const Usecallback = () => {
    const[count, setCount] = useState(0)

    const handleClick=useCallback(()=>{
        setCount(count + 1)
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>add to cart</button>
    </div>
  )
}

export default Usecallback
