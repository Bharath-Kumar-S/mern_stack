import React from "react";
import "./Expense.css";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expense = ({ data }) => {
  const [year, setYear] = useState("2019");

  const ExpenseYearHandler = (year) => {
    setYear(year);
  };

  let filteredExpense = data.filter((element) => {
    return new Date(element.date).getFullYear().toString() === year;
  });

  return (
    <>
      <ExpensesFilter year={year} yearHandler={ExpenseYearHandler} />
      <ExpenseList items={filteredExpense}/>
    </>
  );
};

export default Expense;
