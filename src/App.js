import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Assignment1 from './Components/Assignment1/Employee';
import Assignment1Func from './Components/Assignment1/EmployeeFunc';

import Assignment2 from './Components/Assignment2/CyclicCounter';
import Assignment3 from './Components/Assignment3/LanguageTranslator';
import Assignment4 from './Components/Assignment4/TextEditor';
import Assignment5 from './Components/Assignment5/Pagination';

function App() {
  return (
    <div className="App">
		<header className="App-header">
			<div className="App-body"> 
				<h3 className="m-5">Filtered Employees List</h3>
				<div className="row">
					<Assignment1/>
					<Assignment1Func/>
				</div>

				<h3 className="m-5">Cyclic Counter</h3>
				<div className="row">
					<Assignment2/>
				</div>

				<h3 className="m-5">Language Translator</h3>
				<div className="row">
					<Assignment3/>
				</div>

				<h3 className="m-5">Text Editor</h3>
				<div className="row">
					<Assignment4/>
				</div>

				<h3 className="m-5">Using APIs - Paginated Articles</h3>
				<div>
					<Assignment5/>
				</div>
			</div>
		</header>
    </div>
  );
}

export default App;
