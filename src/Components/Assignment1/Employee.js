import React from 'react';

class Employee extends React.Component{
	constructor(){
		super();
		this.state = {
			filterText:'',
			employeeList:["Alex Jones", "Avery Green", "Parker Hawking", "Charlie Green", "Riley Miller"]
		}
	}
	inputChange = (e) => {
		this.setState({...this.state, filterText: e.target.value.toLowerCase()});
	}
	render(){
		const { employeeList }  = this.state;
		return(
			<div className="col-component">
				<h4>Class component</h4>
				<div className="controls">
					<input type="text" onChange={this.inputChange} className="filter-input" data-testid="filter-input"></input>
				</div>
				<ul className="employees-list">
					{
						employeeList.map(employee => (
							employee.toLowerCase().includes(this.state.filterText)
							? <li  key={employee} data-testid="employee"> { employee } </li> 
							: ''
						))
					}
				</ul>
			</div>
		)
	}
}

export default Employee;