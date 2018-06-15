import React from 'react';
import { DragSource } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    return {
      name: props.emp.name
    };
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Employee = (props) => {
  const { connectDragSource, isDragging, emp} = props;
  return connectDragSource(
    <li className="emp-item">
            {emp.name} -
            <span className="position">
              {emp.position.name}
            </span>
    </li>
  )
};

export default DragSource('employee', cardSource, collect)(Employee);