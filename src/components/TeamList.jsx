import React from 'react';

const TeamList = ({teams, handleClick}) => (
  <div className="teams">
    <h3>Teams</h3>
    <ul className="list">
      {teams.map(team => (
        <li onClick={() => {handleClick(team)}} 
            className={`team-item ${team.selected ? 'selected': ''}`}
            key={team.id}>
              {team.name} ({team.members.length})
        </li>))
      }
    </ul>
  </div>
);

export default TeamList;

