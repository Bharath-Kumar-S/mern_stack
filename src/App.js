import Header from "./components/Header"
import "./App.css"
import Footer from "./components/Footer"
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";


const App = () => {
  return (
    <div className="App-header">
      <Header appName="Header" />
      <NewExpense />
      <Expense />
      <Footer appName="Footer" />
    </div>
  );
}

export default App