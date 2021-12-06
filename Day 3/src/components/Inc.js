import React from "react";


class Inc extends React.Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.handleIncrement}>Increment by 1</button>
        <button onClick={this.handleDecrement}>Decrement by 1</button>
      </div>
    );
  }
}


export default Inc;
