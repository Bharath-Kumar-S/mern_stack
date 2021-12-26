import React from "react";
import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({
    text: "",
    day: "",
    reminder: false,
  });

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (task.text === "" || task.day === "") {
        alert('Please enter task details!!!')
      return;
    }
    addTask(task);
    setTask({text: "", day: "", reminder: false });
  };

  const reminderHandler = (event) => {
    setTask((prev) => {
      return {
        ...prev,
        reminder: event.target.checked,
      };
    });
  };

  const taskHandler = (event) => {
    setTask((prev) => {
      return {
        ...prev,
        text: event.target.value,
      };
    });
  };

  const dateHandler = (event) => {
    setTask((prev) => {
      return {
        ...prev,
        day: event.target.value,
      };
    });
  };

  return (
    <div className="add-form">
      <form className="form-control" onSubmit={addTaskHandler}>
        <label className="label">Task Title</label>
        <input
          className="input"
          type="text"
          value={task.text}
          onChange={taskHandler}
        />
        <label className="label">Day</label>
        <input
          className="input"
          type="date"
          value={task.day}
          onChange={dateHandler}
        />
        <div className="form-control form-control-check">
          <label className="form-control label">Reminder</label>
          <input
            className="form-control-check"
            type="checkbox"
            onChange={reminderHandler}
            checked={task.reminder}
          />
        </div>
        <button className="btn btn-block" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
