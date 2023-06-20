import React from "react";
import style from "./counter";
import "Bootstrap/bootstrap.main.css";

export default class Counter extends React.Component {
      state={
        count: 0,
      }
	render() {

    const incrment=()=>{
      this.setState({count:this.state.count+1})
    }
    const dicrment =()=>{

      if(this.state.count>0){

        this.setState({count:this.state.count-1})
    }
    }

		return( <div className={style.container}>
      <h1 onClick={incrment}>+</h1>
      <h1>{this.state.count}</h1>
      <h1 onClick={dicrment}>-</h1>
      <button className="btn btn-primary">delete</button>
    </div>)
	}
}
