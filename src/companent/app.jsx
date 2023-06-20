import React from "react";
import Counter from "./counter";

const counter = [
	{ id: 1, count: 1 },
	{ id: 2, count: 2 },
];
export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				{counter.map((value,index)=>{
     return(
      <div>
       <Counter />
      </div>
     )
    })}
			</div>
		);
	}
}
