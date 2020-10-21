import React from 'react';

export default class TextEditor extends React.Component{
	constructor(){
		super();
		this.state={
			inputVal:'',
			inputArray:[],
			textareaInput:''
		}
	}

	append = () => {
		const {inputVal, inputArray} = this.state;
		inputArray.push(inputVal);
		this.setState({textareaInput: inputArray.join(' '), inputVal: ''});
	}

	undo = () => {
		const {inputVal, inputArray} = this.state;
		inputArray.pop(inputVal);
		this.setState({textareaInput: inputArray.join(' '), inputVal: ''});
	}

	render(){
		const {textareaInput, inputVal} = this.state
		return(
			<div className="col-component">
				<div>
					<input value={inputVal} onChange={(e) => {this.setState({...this.state, inputVal: e.target.value}) }} className="editor-input" type="text"></input>
					<button className="textareaBtn" onClick={this.append} > Append </button>
					<button className="textareaBtn" onClick={this.undo} > Undo </button>
				</div>
				
				<textarea value={textareaInput} type="text" readOnly></textarea>
			</div>
		)
	}
}