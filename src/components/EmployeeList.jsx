import React from 'react';

const EmployeeList = ({employees}) => (
  <div className="devs">
    <h3>Employees</h3>
    <ul className="list">
      {employees.map(emp => (
        <li className="emp-item" key={emp.id}>
          {emp.name} -
          <span className="position">
            {emp.position.name}
          </span>
        </li>)
      )}
    </ul>
  </div>
);

export default EmployeeList;