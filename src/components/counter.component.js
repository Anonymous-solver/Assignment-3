import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.handleIncrement(this.props.value)}>Increment</button>

        <span style = {{margin: "5px"}}>{this.props.count}</span>
        <button
          disabled={this.props.count === 0}
          onClick={() => this.props.handleDecrement(this.props.value)}
        >
          Decrement
        </button>

        <span style = {{margin: "10px"}}><button onClick={() => this.props.handleRemove(this.props.value)}>
          Remove
        </button></span>
      </>
    );
  }
}

export default Counter;
