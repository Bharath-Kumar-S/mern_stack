import React, { useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailPassReducer = (state, action) => {
  if (action.type === "EMAIL_USER_INPUT") {
    return {
      ...state,
      emailValue: action.emailValue,
      emailIsValid: action.emailValue.includes("@"),
    };
  }
  if (action.type === "EMAIL_BLUR_INPUT") {
    return {
      ...state,
      emailIsValid: state.emailValue.includes("@"),
    };
  }
  if (action.type === "PASS_USER_INPUT") {
    return {
      ...state,
      passwordValue: action.passwordValue,
      passwordIsValid: action.passwordValue.trim().length > 6,
    };
  }
  if (action.type === "PASS_BLUR_INPUT") {
    return {
      ...state,
      passwordIsValid: state.passwordValue.trim().length > 6,
    };
  }
  return {
    emailValue: "",
    passwordValue: "",
    passwordIsValid: false,
    emailIsValid: false,
  };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [formState, dispatchEmail] = useReducer(emailPassReducer, {
    emailValue: "",
    passwordValue: "",
    passwordIsValid: false,
    emailIsValid: false,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: "EMAIL_USER_INPUT",
      emailValue: event.target.value,
    });
    setFormIsValid(formState.emailIsValid && formState.passwordIsValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchEmail({
      type: "PASS_USER_INPUT",
      passwordValue: event.target.value,
    });
    setFormIsValid(formState.passwordIsValid && formState.emailIsValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "EMAIL_BLUR_INPUT",
    });
  };

  const validatePasswordHandler = () => {
    dispatchEmail({
      type: "PASS_BLUR_INPUT",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(formState.emailValue, formState.passwordValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.passwordValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
