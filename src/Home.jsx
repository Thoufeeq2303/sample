
import React from 'react'
import './home.css'

const Home = () => {
    const person = "md thoufeeq"

    const box = {
        color:"purple"
    }
  return (
    <div>
      <h1 className="app" style={box}>Rafce</h1>
      <h1 style={{color:"red", backgroundColor:"greenyellow"}}>{person}</h1>
      <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum praesentium rem eius animi odio minus officiis assumenda nihil possimus dolore? Perferendis illo enim ratione iure reiciendis ex repellendus in perspiciatis?</h3>
    </div>
  )
}

export default Home

//jsx - javascript xml(extension of html)
//varibale - {}
//attribute - class keyword - className