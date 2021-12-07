import Header from "./components/Header"
import "./App.css"
import Footer from "./components/Footer"
import Timer from "./components/Timer";
import Inc from "./components/Inc";
import Expense from "./components/Expense";


const App = () => {
  return (
    <div className="App-header">
      <Header appName="Header" />
      {/* <Timer /> */}
      {/* <Inc /> */}
      I am Bharath
      <Expense />
      <Footer appName="Footer" />
    </div>
  );
}

export default App

// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoList items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="new-todo">What needs to be done?</label>
//           <input
//             id="new-todo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>Add #{this.state.items.length + 1}</button>
//         </form>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.state.text.length === 0) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now(),
//     };
//     this.setState((state) => ({
//       items: state.items.concat(newItem),
//       text: "",
//     }));
//   }
// }

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map((item) => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default App;