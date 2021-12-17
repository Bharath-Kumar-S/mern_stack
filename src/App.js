import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const Data = [
    { title: "Bike", date: "2019-12-23", amount: 234, id: 1 },
    { title: "Car", date: "2019-1-25", amount: 2344, id: 2 },
    { title: "Mobile", date: "2019-2-13", amount: 250, id: 3 },
    { title: "pen", date: "2020-12-23", amount: 235344, id: 4 },
    { title: "book", date: "2020-1-25", amount: 234544, id: 5 },
    { title: "tap", date: "2020-2-13", amount: 54250, id: 6 },
    { title: "laptop", date: "2021-12-23", amount: 545, id: 7 },
    { title: "juice", date: "2021-1-25", amount: 24, id: 8 },
    { title: "cup", date: "2021-2-13", amount: 36, id: 9 },
    { title: "Boat", date: "2022-12-23", amount: 2334, id: 10 },
    { title: "jeep", date: "2022-1-25", amount: 435, id: 11 },
    { title: "Gun", date: "2022-2-13", amount: 4500, id: 12 },
  ];

  const [ExpenseData, setExpenseData] = useState(Data);

  const handleNewData = (newExpenseData) => {
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
