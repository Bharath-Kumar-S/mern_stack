import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = ({ newData }) => {
  const [display, setDisplay] = useState(false);
  const newExpenseHandler = (newExpenseData) => {
    newData({
      ...newExpenseData,
      id: Math.random().toString(),
    });
  };

  const handleToggle = () => {
    setDisplay(true);
  }

    const hideToggle = () => {
    setDisplay(false);
  }


  return (
    <div>
      {!display && <button onClick={handleToggle}>Add New Expense</button> }
      {display && <ExpenseForm onSaveForm={newExpenseHandler} hideEdit={hideToggle}/> }
    </div>
  );
};

export default NewExpense;
