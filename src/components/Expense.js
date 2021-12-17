import React from "react";
import Item from "./Item";
import "./Expense.css";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import { useState } from "react";

const Expense = ({ data }) => {

  const [year, setYear] = useState("2019");

  const ExpenseYearHandler = (year) => {
    setYear(year);
  };

  let filteredExpense = data.filter((element) => {
    return (new Date(element.date).getFullYear().toString() === year)
  });

  return (
    <>
      <ExpensesFilter year={year} yearHandler={ExpenseYearHandler} />
      {/* {data.map((d, index) => (
        <Item key={index} task={d} />
      ))} */}

      {filteredExpense.map((d) => (
        <Item key={d.id} task={d} />
      ))}
    </>
  );
};

export default Expense;
