import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

export const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([])

  const navigator = useNavigate();

  useEffect(() => {
    listEmployees().then((response) => {
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
    })
  }, [])

  function addNewEmployee() {
    navigator('/add-employee')
  }

  return (
    <div className='container'>
        <h1 className='text-centered'>List of Employees</h1>
        
        <button type="button" class="btn btn-primary mb-2 float-end" onClick={addNewEmployee}>Add new Employee</button>
        <table className='table table-stripped table-bordered'>
            <thead>
                <tr>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
            {
                    employees.map(employee => 
                        <tr key={employee.id}> 
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
