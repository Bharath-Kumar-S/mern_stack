import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor",
      day: "Feb 5th at 2:30pm",
    },
    {
      id: 2,
      text: "Meeting",
      day: "Feb 5th at 2:30pm",
    },
    {
      id: 3,
      text: "Shopping",
      day: "Feb 5th at 2:30pm",
    },
  ]);

  return (
    <>
      <Header />
      <Tasks tasks={tasks}/>
    </>
  );
};

export default App;
