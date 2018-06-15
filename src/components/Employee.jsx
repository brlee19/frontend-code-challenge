import React from 'react';

const Employee = ({emp}) => (
  <li className="emp-item">
          {emp.name} -
          <span className="position">
            {emp.position.name}
          </span>
  </li>
);

export default Employee;