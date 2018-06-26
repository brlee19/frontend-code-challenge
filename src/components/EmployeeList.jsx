import React from 'react';
import { connect } from 'react-redux';

const EmployeeList = (props) => (
  <div className="devs">
    <h3>Employees</h3>
    <ul className="list">
      {props.employees.map(emp => (
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

const mapStateToProps = (state) => {
  return {
    employees: state.data.employees
  }
};

export default connect(mapStateToProps)(EmployeeList);