import "./App.css"
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  return (
    <div className="App-header">
      <NewExpense />
      <Expense />
    </div>
  );
}

export default App