import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../../actions/teams';
import MDSpinner from 'react-md-spinner';

import EmployeeList from '../../components/EmployeeList';
import TeamList from '../../components/TeamList';
import TeamRoster from '../../components/TeamRoster';

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Some unremarkable IT-Team</h2>
        </div>
        <div className="wrapper">
          {this.props.isLoading ? <MDSpinner /> : null}
          <div className="teams-container">
            <TeamRoster />
          </div>
          <div className="tools">
            <TeamList />
            <EmployeeList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.data.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: bindActionCreators(fetchData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
