import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectTeam } from '../actions/teams';

const TeamList = (props) => {
  const {teams, selectTeam} = props;
  return (
  <div className="teams">
    <h3>Teams</h3>
    <ul className="list">
      {teams.map(team => (
        <li onClick={() => {selectTeam(team)}} 
            className={`team-item ${team.selected ? 'selected': ''}`}
            key={team.id}>
              {team.name} ({team.members.length})
        </li>))
      }
    </ul>
  </div>
  )
};

const mapStateToProps = (state) => {
  return {
    teams: state.data.teams
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTeam: bindActionCreators(selectTeam, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(TeamList);

