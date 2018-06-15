import React from 'react';
import '../containers/App/App.css';
import TeamRoster from './TeamRoster.jsx';

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

const TeamRosterList = (props) => {
  const { teams, removeMember, addMember } = props;
  return (
    <div>
      {teams.filter(team => team.selected).map((team) => <TeamRoster team={team} removeMember={removeMember} addMember={addMember}/>)}
    </div>
  )
};

export default TeamRosterList;