import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTeam, removeMember, fetchData } from '../../actions/teams';
import EmployeeList from '../../components/EmployeeList';
import TeamList from '../../components/TeamList';
import TeamRoster from '../../components/TeamRoster';

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { teams, employees, removeMember, selectTeam} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Some unremarkable IT-Team</h2>
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
