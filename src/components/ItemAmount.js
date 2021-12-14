import React from "react";
import "./Expense.css";

const ItemAmount = ({ amount }) => {
  return <div className="expense-item__price">Amount : {amount}</div>;
};

export default ItemAmount;
