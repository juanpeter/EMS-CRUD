import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

export const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const navigator = useNavigate()

  function saveEmployee(e) {
    e.preventDefault();

    const employee = {
      firstName,
      lastName,
      email
    }

    createEmployee(employee).then((response) => {
      console.log(response.data)
      navigator('/employees')
    })
  }

  return (
    <div className='container col-md-6'>
      <br />
      <div className='row'>
        <div className='card'>
          <h2 className='text-center'>Add employee</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input 
                  type="text" 
                  className='form-control' 
                  placeholder='First Name' 
                  name='firstName' 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input 
                  type="text" 
                  className='form-control' 
                  placeholder='Last Name' 
                  name='lastName' 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input 
                  type="text" 
                  className='form-control' 
                  placeholder='Email' 
                  name='email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
