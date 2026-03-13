import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function EmployeeList() 
{
  const [employees,setEmployees] = useState([]);

  const [value] = useTypewriter({
    words : ["Details","Information","List"],
    loop: true,
    typeSpeed : 80,
    deleteSpeed : 120
  })

   useEffect(()=>{
    EmployeeService.getAllEmployees().then(res =>{
        setEmployees(res.data);
    })
  },[]);

  return (
    <div className='mt-5'>
        <h3 className='mt-5 text-center pt-3'>Employee {value} <Cursor/> </h3> 
        <div className='container mt-5'>
      <Link to="/add-emp" className='btn btn-secondary w-25 mb-2'> Add Employee </Link> 
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>DOJ</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee=>{
                         <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.doj}</td>
                                    <td>{employee.dept.deptName}</td>
                                    <td>{employee.dept.designation}</td>
                                    <td>

<Link to={`/update-emp/${employee.id}`} className='btn btn-warning'>update</Link>
                                    </td>

                                </tr>
                    })   
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default EmployeeList
