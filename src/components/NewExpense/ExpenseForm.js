import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [updatedExpense, setExpenseState] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const expenseTitleHandler = (event) => {
    console.log(event.target.value);
    setExpenseState((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const expenseAmountHandler = (event) => {
    console.log(event.target.value);
    setExpenseState((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const expenseDateHandler = (event) => {
    console.log(event.target.value);
    setExpenseState((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const formSubmitHandler = (event) =>{
    event.preventDefault();
    console.log(updatedExpense);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={expenseTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={expenseAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={expenseDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
