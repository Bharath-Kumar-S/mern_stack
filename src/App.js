import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const Data = [
    { title: "Bike", date: "2019-12-23", amount: 234, id: 1 },
    { title: "Car", date: "2019-1-25", amount: 2344, id: 2 },
    { title: "Mobile", date: "2019-2-13", amount: 250, id: 3 },
  ];

  const [ExpenseData, setExpenseData] = useState(Data);

  const handleNewData = (newExpenseData) => {
    console.log(newExpenseData)
    setExpenseData((prevData) => {
      return [...prevData, newExpenseData];
    });
  };

  return (
    <div className="App-header">
      <NewExpense newData={handleNewData} />
      <Expense data={ExpenseData} />
    </div>
  );
};

export default App;
