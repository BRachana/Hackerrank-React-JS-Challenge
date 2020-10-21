import React from 'react';

export default class CyclicCounter extends React.Component{
	constructor(){
		super();
		this.state ={
			count:0,
			k:0
		}
	}
	changeCounter = () => {
		if(this.state.count < this.state.k){
			this.setState({...this.state, count:this.state.count+1});
		}else{
			this.setState({...this.state, count:0});
		}
	}

	onInputChange = (e) => {
		console.log(e.target.value);
		this.setState({...this.state, K: e.target.value});
	}

	render(){
		return(
			<div className="col-component">
				<div>
					<input className="cyclicInput" onChange={this.onInputChange}></input>
				</div>
				<button className="cyclicBtn" onClick={this.changeCounter}> {this.state.count}  </button>
			</div>
		)
	}
}