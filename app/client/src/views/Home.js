import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { account } from '../../../controller/accountController';
import Login from './Login';

export default function Home() {

	const [auth, setAuth] = useState(false)
	let history = useHistory();

	useEffect(()=>{
		console.log("sasho");

		var myHeaders = new Headers();
		myHeaders.append("accept", "application/json");
		myHeaders.append("Content-Type", "application/json");

		let req = new Request(
			'https://papp.rastava.com/api/auth/', 
			{
				mode: 'cors',
				credentials: 'include',
				method: 'GET',
				headers: myHeaders
			}
		);
		
		fetch(req)
		.then(response => response.json())
		.then(result => {result.detail=="Verified"?true:history.push("/signin")})

	},[auth])



	function login() {
		return <Login />
	}
	function home_view() {
		return(
			<p>home</p>
		)
	}


	return(
		<>
			<p>home</p>
		</>
	)
}