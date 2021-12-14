import {useState} from 'react'

import ItemAmount from "./ItemAmount";
import ItemDate from "./ItemDate";
import ItemTitle from "./ItemTitle";
import './styles/item.css'
import "./ExpenseData.css";

const Item = ({ task }) => {

  const [title, setTitle] = useState(task.title)

  const clickHandler = ()=>{
    setTitle('Updated Title')
    console.log('Button Clicked')
  }

  return (
    <div className="expense-date">
      <ItemDate date={task.date} />
      <ItemTitle title={title} />
      <ItemAmount amount={task.amount} />
      <button onClick={clickHandler}>Change</button>
    </div>
  );
};

export default Item;
