import React, { useState } from 'react'

const FormValidation = () => {
    const [formData, setFormData] = useState({name : '', email: '' , password: ''})

    const [errors, setFormErrors] = useState('')

    const handleOnChange = (e) =>{
        const [name, value] = e.target
        setFormData({...formData, [name]: value})
    }

    const validate = () =>{
        let Erroros = {}

        if(!formData.name.trim()){
            Erroros.name = 'Name required'
        }
        if(!formData.email){
            Erroros.email = 'Email required'
        }

        if(!formData.password){
            Erroros.password = "Password is required.";
        }
        setFormErrors(Erroros)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        if(validate()){
            alert('Form Submitted')
        }
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>

       <h1> Enter your name</h1>
        <input  type='text' value={formData.name} placeholder='Enter your name'  onChange={handleOnChange}/>
        <h1> Enter your email</h1>

        <input  type='email' value={formData.email} placeholder='Enter your Email'  onChange={handleOnChange}/>
        <h1> Enter your password</h1>

        <input  type='password' value={formData.password} placeholder='Enter a password'  onChange={handleOnChange}/>
        <div><button type='submit'> Submit</button></div>
       </form>

    </div>
  )
}

export default FormValidation