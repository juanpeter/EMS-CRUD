import React, { useState } from 'react'
import { createEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

export const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: ""

  })

  const navigator = useNavigate()

  const {id} = useParams()

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if(validateForm()) {

      const employee = {
        firstName,
        lastName,
        email
      }
      console.log(employee)

      if(id) {
        updateEmployee(id, employee).then((response) => {
          console.log(response.data)
          navigator("/employees")
        }).catch(error => {
          console.log(error)
        })
      }
      

    createEmployee(employee).then((response) => {
      console.log(response.data)
      navigator('/employees')
    })
    }
  }

      function validateForm() {
      let valid = true

      const errorCopy = {... errors}

      if (firstName.trim()) {
        errorCopy.firstName = ""
      } else {
        errorCopy.firstName = "First Name is required"
        valid = false;
      }

      if (lastName.trim()) {
        errorCopy.lastName = ""
      } else {
        errorCopy.lastName = "Last Name is required"
        valid = false;
      }

      if (email.trim()) {
        errorCopy.email = ""
      } else {
        errorCopy.email = "Email is required"
        valid = false;
      }

      setErrors(errorCopy)
      return valid
    }

    function pageTitle() {
      if(id) {
        return <h2 className='text-center'>Update Employee</h2>
      } else {
        return <h2 className='text-center'>Add Employee</h2>
      }
    }

  return (
    <div className='container col-md-6'>
      <br />
      <div className='row'>
        <div className='card'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input 
                  type="text" 
                  className= {`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  placeholder='First Name' 
                  name='firstName' 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                { errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div> }
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input 
                  type="text" 
                  className= {`form-control ${errors.lastName ? 'is-invalid' : ''}`} 
                  placeholder='Last Name' 
                  name='lastName' 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                  { errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div> }
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input 
                  type="text" 
                  className= {`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder='Email' 
                  name='email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                { errors.email && <div className='invalid-feedback'> {errors.email} </div> }
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
