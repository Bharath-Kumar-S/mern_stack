import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  const deleteHandler = (id) => {
    onDelete(id);
  };

  const reminderHandler = (id) => {
    toggleReminder(id);
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`task ${task.reminder ? 'reminder' : ''}`}
          onDoubleClick={() => reminderHandler(task.id)}
        >
          <h3>
            {task.text}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => deleteHandler(task.id)}
            />
          </h3>
          <h6>{task.day}</h6>
        </li>
      ))}
    </ul>
  );
};

export default Tasks
