import React from "react";
import style from "./counter";

export default class Counter extends React.Component {
	state = [
			{id:1,count:0}
	];
	render() {
		const incrment = () => {
			this.setState({ count: this.state.count + 1 });
		};
		const dicrment = () => {
			if (this.state.counter.count > 0) {
				this.setState({ count: this.state.counter.count - 1 });
			}
		};
		const deleted = () => {
			this.setState({ count: null });
		};

		return (
			<div className={style.container}>
				<h1 onClick={incrment}>+</h1>
				<h1>{this.state.counter.count}</h1>
				<h1 onClick={dicrment}>-</h1>
				<button className="btn btn-primary" onClick={deleted}>
					delete
				</button>
			</div>
		);
	}
}
