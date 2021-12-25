import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {

  const [users, setUsers] = useState([
    { 
      name: "Adam",
      age: 33
    },
    {
      name: "Bharath",
      age: 28
    }
  ]);

  const addUser = (user) => {
    setUsers((prev)=>{
      // console.log(prev, user)
      return [...prev,user];
    });
  }

  return (
    <React.Fragment className="App-header">
      Hello
      <AddUser addUser={addUser} />
      <UserList users={users} />
    </React.Fragment>
  );
};

export default App;
