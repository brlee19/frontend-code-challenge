import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { selectTeam, removeMember, fetchData } from '../../actions/teams';
import EmployeeList from '../../components/EmployeeList';
import TeamList from '../../components/TeamList';
import TeamRoster from '../../components/TeamRoster';
import Spinner from '../../components/Spinner';

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { isLoading, teams, employees, removeMember, selectTeam } = this.props;
    return isLoading ? <Spinner/> : (
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

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps, mapDispatchToProps)
)(App);
