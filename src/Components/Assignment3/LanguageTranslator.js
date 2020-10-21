import React, { useState } from 'react';

export default function LanguageTranslator() {
	const [outputVal, setOutput] = useState('');

	const translations = new Map([
		['cat', 'gato'],
		['cats', 'gatos'],
		['man', 'hombre'],
		['men', 'hombres'],
		['vine', 'vino'],
		['strawberry', 'fresa'],
		['strawberries', 'fresas'],
	  ]);

	const inputChange = (e) => {
		if(translations.has(e.target.value)){
			setOutput(translations.get(e.target.value));
		}else{
			setOutput('');	
		}
	}
	return(
		<div className="col-component">
			<div>
				<label className="label" >input:</label>
				<input type="text" onChange={inputChange}></input>
			</div>
			<div>
				<label className="label">output:</label>
				<input type="text" value={outputVal} readOnly ></input>
			</div>
		</div>
	)
}