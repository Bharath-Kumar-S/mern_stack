import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = ({ addUser }) => {
  const [User, setUser] = useState({ name: "", age: "" });
  const [error,setError] = useState()

  const nameHandler = (event) => {
    let name = event.target.value.trim();
      setUser((prev) => {
        return { ...prev, name: name };
      });
  };

  const ageHandler = (event) => {
    let age = event.target.value.trim();
      setUser((prev) => {
        return { ...prev, age: age };
      });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    let {name, age} = User; 
    if(name.length === 0 || age.length === 0 || age <= 0 )
    {
        setError({
            title: 'Invalid input',
            contents: 'Please enter valid data'
        })
        return ;
    }
    addUser(User);
    setUser({ name: "", age: "" });
  };

  const errorHandler = () => {
      setError(null)
  }

  return (
    <Wrapper>
      {error && <ErrorModal error={error} handler={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            onChange={nameHandler}
            value={User.name}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageHandler}
            value={User.age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
