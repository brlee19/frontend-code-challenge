import React from 'react';
import Employee from './Employee.jsx';

const EmployeeList = ({employees}) => (
  <div className="devs">
    <h3>Employees</h3>
    <ul className="list">
      {employees.map(emp => (
        <Employee emp={emp} key={emp.id}/>
      ))}
    </ul>
  </div>
);

export default EmployeeList;