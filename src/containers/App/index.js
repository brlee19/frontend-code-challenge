import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MDSpinner from 'react-md-spinner';

import { selectTeam, removeMember, fetchData } from '../../actions/teams';
import EmployeeList from '../../components/EmployeeList';
import TeamList from '../../components/TeamList';
import TeamRoster from '../../components/TeamRoster';

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { isLoading, teams, employees, removeMember, selectTeam } = this.props;
    console.log('is loading?', isLoading)
    return isLoading ? <MDSpinner/> : (
      <div className="App">
        <div className="App-header">
          <h2>Some unremarkable IT-Team</h2>
          <pre>IS LOADING? {isLoading}</pre>
        </div>
        <div className="wrapper">
          <div className="teams-container">
            <TeamRoster teams={teams} removeMember={removeMember}/>
          </div>
          <div className="tools">
            <TeamList teams={teams} handleClick={selectTeam}/>
            <EmployeeList employees={employees}/>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isLoading: state.data.isLoading,
    teams: state.data.teams,
    positions: state.data.positions,
    employees: state.data.employees
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTeam: bindActionCreators(selectTeam, dispatch),
    removeMember: bindActionCreators(removeMember, dispatch),
    fetchData: bindActionCreators(fetchData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
