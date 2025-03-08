import React from 'react'

export const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "johnDoe@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "janeDoe@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Anon",
            "lastName": "Guy",
            "email": "guyAnonimous@gmail.com"
        }
    ]

  return (
    <div className='container'>
        <h1 className='text-centered'>List of Employees</h1>

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
                    dummyData.map(employee => 
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
