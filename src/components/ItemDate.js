import React from 'react'
import './styles/itemdate.css'
import "./Expense.css";

const ItemDate = ({date}) => {
    return (
      <div>
        <h3 className=".expense-item__description h2">Date : {date}</h3>
      </div>
    );
}

export default ItemDate
