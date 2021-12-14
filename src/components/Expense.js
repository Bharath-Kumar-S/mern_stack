import React from "react";
import Item from "./Item";
import "./Expense.css"

const Expense = () => {
  const data = [
    { title: "Bike", date: "2019-12-23", amount: 234 },
    { title: "Car", date: "2019-1-25", amount: 2344 },
    { title: "Mobile", date: "2019-2-13", amount: 250 },
  ];

  return (
    <>
      {data.map((d,index) => (
        <Item key={index} task={d}/>
      ))} 
    </>
  );
};

export default Expense;
