import React, { useState } from 'react'

const FormValidation = () => {
    const [formData, setFormData] = useState({name: '', email: '', password: ''})
    const [formErrors, setFormErrors] = useState({})

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const validate = () => {
        let Errors = {}

        if(!formData.name.trim()){
            Errors.name = 'Name is required'
        }
        if (!formData.email) {
            Errors.email = "Email is required.";
          }
          if (!formData.password) {
            Errors.password = "Password is required.";
          }
          setFormErrors(Errors)
        return Object.keys(formErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate()){
        alert('Form submitted')
            
        }
    }
  return (
    <div>
        <h2> React Form Validation </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                type='text'
                name= 'name'
                value={formData.name}
                onChange={handleOnChange}
                />
                {formErrors.name && <p>{formErrors.name}</p>}
            </div>
            <div>
                <label>Email: </label>
                <input
                type='email'
                name= 'email'
                value={formData.email}
                onChange={handleOnChange}
                />
                {formErrors.email && <p>{formErrors.email}</p>}

            </div>
            <div>
                <label>Password: </label>
                <input
                type='password'
                name= 'password'
                value={formData.password}
                onChange={handleOnChange}
                />
                {formErrors.password && <p>{formErrors.password}</p>}

            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation