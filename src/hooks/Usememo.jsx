import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const[count, setCount] = useState(0)

    const square = useMemo(()=>{
        return count*count
    })
  return (
    <div>
      <h1>{square}</h1>
      <input type="number" value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
    </div>
  )
}

export default Usememo
