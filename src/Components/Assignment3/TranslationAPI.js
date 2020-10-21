import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiBaseUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate";

export default function TranslatorAPI() {
	const [inputVal, setInput] = useState('');
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
	//componentDidMount
	useEffect( () => { 

	},[])

	const inputChange = (e) => {
		setInput(e.target.value);
	}
	const translateText = () => {
		axios({
			method: 'get',
			url: `${apiBaseUrl}`
		})
		.then(resp=> {

		})
		.catch(err=>{

		});
	}

	return(
		<div className="col-component">
			<div>
				<label className="label" >input:</label>
				<input type="text" onChange={inputChange}></input>
				<button onClick={translateText} > Translate </button>
			</div>
			<div>
				<label className="label">output:</label>
				<span> {outputVal} </span>
			</div>
		</div>
	)
}