import "./App.css"
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {

  const handleNewData = (newExpenseData) => {
    console.log(newExpenseData)
  }

  return (
    <div className="App-header">
      <NewExpense newData={handleNewData}/>
      <Expense />
    </div>
  );
}

export default App