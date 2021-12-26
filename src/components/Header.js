import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, addFormView, addTaskView }) => {
  const onClick = () => {
    addFormView();
  };

  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (<Button
        color={addTaskView ? "red" : "green"}
        text={addTaskView ? "Close" : "Add"}
        onClick={onClick}
      />)}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
