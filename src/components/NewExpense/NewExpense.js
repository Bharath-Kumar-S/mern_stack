import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ newData }) => {
  const newExpenseHandler = (newExpenseData) => {
    newData({
      ...newExpenseData,
      id: Math.random().toString(),
    });
  };

  return (
    <div>
      <ExpenseForm onSaveForm={newExpenseHandler} />
    </div>
  );
};

export default NewExpense;
