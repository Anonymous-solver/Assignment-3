import React, { Component } from "react";
import Counter from "./counter.component";
import Navbar from "./navbar.component";

class Counters extends Component {
	state = {
		counters: [],
	};

	handleAdd = () => {
		const counters = [...this.state.counters];
		const id = counters.length;
		counters.push({ id: id, value: 0 });
		this.setState({ counters });
	};

	handleRemove = (id) => {
		let counters = [...this.state.counters];
		counters = counters.filter((counter) => counter.id !== id);
		this.setState({ counters });
	};

	handleIncrement = (id) => {
		const counters = [...this.state.counters];
		const counter = counters.find((counter) => counter.id === id);
		counter.value += 1;
		this.setState({ counters });
	};

	handleDecrement = (id) => {
		const counters = [...this.state.counters];
		const counter = counters.find((counter) => counter.id === id);
		if (counter.value === 0) return;
		counter.value -= 1;
		this.setState({ counters });
	};

	render() {
		return (
			<div
				style={{
					backgroundColor: "lightsalmon",
					textAlign: "center",
					boxShadow: "1px 1px 10px gray",
					borderRadius: "5px",
					marginLeft: "400px",
					marginRight: "400px",
					marginTop: "50px",
					paddingBottom: "10px",
				}}
			>
				<Navbar count={this.state.counters.length} />
				<button onClick={this.handleAdd}>Add</button>
				<br />
				<br />
				{this.state.counters.map((counter, index) => (
					<React.Fragment key={index}>
						<Counter
							count={counter.value}
							value={counter.id}
							handleRemove={this.handleRemove}
							handleIncrement={this.handleIncrement}
							handleDecrement={this.handleDecrement}
						/>
						<br /> <br />
					</React.Fragment>
				))}
			</div>
		);
	}
}

export default Counters;
