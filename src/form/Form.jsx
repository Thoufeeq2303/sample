import React, { useState } from 'react'

const Form = () => {
    const[formdata, setFormdata] = useState({
        username:"",
        email:"",
        password:""
    })

    const[error, setError] = useState({})

    const validate = () =>{
        const newError = {}

        if(!formdata.username) newError.username = "enter your name"

        if(!formdata.email) newError.email = "enter your email"

        else if(!/\S+@\S+\.\S+/.test(formdata.email)) newError.email = "enter valid email"

        if(!formdata.password) newError.password = "enter your password"

        else if(formdata.password.length < 6) newError.password = "password must be atleast 6 char"

        else if(!/[A-Z]/.test(formdata.password)) newError.password = "password must contain 1 upper case"

        return newError

    }

    const handleChange = (e) =>{
        const{name, value} = e.target;

        setFormdata({
            ...formdata,

            [name]:value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        const validation = validate()

        if(Object.keys(validation).length === 0){
            console.log(formdata)

            setFormdata({
                username:"",
                email:"",
                password:""
            })
            setError({})
        }
        else{
            setError(validation)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder='Username' name='username' onChange={handleChange} value={formdata.username}/>
        {error.username && <p style={{color:"red"}}>{error.username}</p>}


        <label>Email</label>
        <input type="email" placeholder='Email' name="email" onChange={handleChange} value={formdata.email}/>
        {error.email && <p style={{color:"red"}}>{error.email}</p>}

        <label>Password</label>
        <input type="password" placeholder='Password' name="password" onChange={handleChange} value={formdata.password}/>
        {error.password && <p style={{color:"red"}}>{error.password}</p>}

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form

//dom event - click,dbl
//react event - onClick, onChnage

//if()
//  / / 
