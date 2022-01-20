import React, { Component } from "react";

class Counter extends Component {
	render() {
		const { value, count, handleIncrement, handleDecrement, handleRemove } =
			this.props;
		return (
			<>
				<button onClick={() => handleIncrement(value)}>
					Increment
				</button>

				<span style={{ margin: "5px" }}>{count}</span>
				<button
					disabled={count === 0}
					onClick={() => handleDecrement(value)}
				>
					Decrement
				</button>

				<span style={{ margin: "10px" }}>
					<button onClick={() => handleRemove(value)}>Remove</button>
				</span>
			</>
		);
	}
}

export default Counter;
