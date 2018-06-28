import React from 'react';
import '../containers/App/App.css';

import { connect } from 'react-redux';
import { removeMember } from '../actions/teams';

const createTeamsTable = (teams, removeMember) => {
  const members = team => team.members.map(member => (
    <div key={member.id} className="table__row">
      <div className="table__cell">{member.name}</div>
      <div className="table__cell fixed">{member.position.name}</div>
      <div className="table__cell fixed">
        <button onClick={() => removeMember(team, member)}>X</button>
      </div>
    </div>
  ));

  const tables = teams.filter(team => team.selected).map(team => (
    <div className="team-table" key={team.id}>
      <h2>{team.name} ({team.members.length})</h2>
      <div className="table">
        {members(team)}
      </div>
    </div>
  ));
  return tables;
}

const TeamRoster = (props) => {
  const {teams, removeMember} = props;
  return teams.length ? (<div className="teams-container">
                  {createTeamsTable(teams, removeMember)}
                  </div>) : null
};

const mapStateToProps = (state) => {
  return {
    teams: state.data.teams
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMember: (team, member) => {
      dispatch(removeMember(team, member))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamRoster);