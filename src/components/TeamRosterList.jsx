import React from 'react';
import { DropTarget } from 'react-dnd';
import '../containers/App/App.css';

const comparisonTarget = {
  drop(props, monitor) {
    console.log('props are', props.teams)
    console.log('item being dropped is', monitor.getItem())
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

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
  const { teams, removeMember, connectDropTarget} = props;
  return connectDropTarget(
    teams.length ? (<div className="teams-container">
                    {createTeamsTable(teams, removeMember)}
                    </div>) : null
  )
};

export default DropTarget('employee', comparisonTarget, collect)(TeamRosterList);