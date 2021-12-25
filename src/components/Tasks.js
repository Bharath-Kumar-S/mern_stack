import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Tasks = ({tasks}) => {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className='task'>
            <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}}/> </h3>
            <h6>{task.day}</h6>
          </li>
        ))}
      </ul>
    );
}

export default Tasks
