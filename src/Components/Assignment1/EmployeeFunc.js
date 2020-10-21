import React, { useState } from 'react';

export default function EmployeeFunc (){
	const [filterInput, setFilterInput] = useState('');
	const employeeList = ["Alex Jones", "Avery Green", "Parker Hawking", "Charlie Green", "Riley Miller"]
	const inputChange = (e) => {
		setFilterInput(e.target.value.toLowerCase())
	}
	return(
		<div className="col-component">
			<h4>Function component</h4>
			<div>
				<input type="text" onChange={inputChange}></input>
			</div>
			<ul>
				{
					employeeList.map(employee => (
						employee.toLowerCase().includes(filterInput)
						? <li key={employee}> {employee} </li>
						: ''
					))
				}
			</ul>
		</div>
	)
}