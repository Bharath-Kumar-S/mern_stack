import React from "react";
import Item from "./Item";

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <p> No Records Found </p>;
  } else {
    return items.map((d) => <Item key={d.id} task={d} />);
  }
};

export default ExpenseList;
