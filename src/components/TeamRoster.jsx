import React from 'react';
import '../containers/App/App.css';
import { DropTarget } from 'react-dnd';

const comparisonTarget = {
  drop(props, monitor) {
    props.addMember(props.team, monitor.getItem())
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

const members = (team, removeMember) => team.members.map(member => (
  <div key={member.id} className="table__row">
    <div className="table__cell">{member.name}</div>
    <div className="table__cell fixed">{member.position.name}</div>
    <div className="table__cell fixed">
      <button onClick={() => removeMember(team, member)}>X</button>
    </div>
  </div>
));

const TeamRoster = (props) => {
  const { team, removeMember, addMember, connectDropTarget } = props;

  return connectDropTarget(
    <div className="team-table" key={team.id}>
      <h2>{team.name} ({team.members.length})</h2>
      <div className="table">
        {members(team, removeMember)}
      </div>
    </div>
  )
}

export default DropTarget('employee', comparisonTarget, collect)(TeamRoster);