import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = ({ addUser }) => {
  const [error, setError] = useState();
  const nameRef = useRef('')
  const ageRef = useRef('');

  const addUserHandler = (event) => {
    event.preventDefault();
    let name = nameRef.current.value;
    let age = ageRef.current.value;
    if (
      name.length === 0 ||
      age.length === 0 ||
      age <= 0
    ) {
      setError({
        title: "Invalid input",
        contents: "Please enter valid data",
      });
      return;
    }
    addUser({ name: name, age: age*1 });
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal error={error} handler={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={nameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
