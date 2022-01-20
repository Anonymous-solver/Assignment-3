import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav style={{ textAlign: "center" }}>
				<div>
					<strong>Added Cart {this.props.count}</strong>
					<hr />
				</div>
			</nav>
		);
	}
}

export default Navbar;
