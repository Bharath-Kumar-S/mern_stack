import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

const App = () => {
  const [addTaskView, setAddTaskView] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const tasksFromServer = await getTasks();
      setTasks(tasksFromServer);
    };
    fetchTasks();
  }, []);

  const getTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const getTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const task = await getTask(id);
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...task, reminder: !task.reminder }),
    });
    const data = await res.json();
    setTasks(tasks.map((task) => (task.id === id ? { ...data } : task)));
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const addTaskViewHandler = () => {
    setAddTaskView(!addTaskView);
  };

  return (
    <BrowserRouter>
      <Header addFormView={addTaskViewHandler} addTaskView={addTaskView} />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              {addTaskView && <AddTask addTask={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  toggleReminder={toggleReminder}
                />
              ) : (
                "No Task To Show"
              )}
              <Footer />
            </React.Fragment>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
