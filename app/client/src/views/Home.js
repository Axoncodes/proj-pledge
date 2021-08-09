import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Box from '../components/box/Box';
import List from '../components/list/List';

import { account } from '../../../controller/accountController';
import Login from './Login';
import Profile from '../components/profile/Profile';

export default function Home() {

	const [auth, setAuth] = useState(false)
	let history = useHistory();

	// useEffect(()=>{

	// 	var myHeaders = new Headers();
	// 	myHeaders.append("accept", "application/json");
	// 	myHeaders.append("Content-Type", "application/json");

	// 	let req = new Request(
	// 		'https://papp.rastava.com/api/auth/', 
	// 		{
	// 			mode: 'cors',
	// 			credentials: 'include',
	// 			method: 'GET',
	// 			headers: myHeaders
	// 		}
	// 	);
		
	// 	fetch(req)
	// 	.then(response => response.json())
	// 	.then(result => {result.detail=="Verified"?true:history.push("/signin")})

	// },[auth])



	function login() {
		return <Login />
	}
	function home_view() {
		return(
			<p>home</p>
		)
	}


	return(
		<section className="fullview" id="Home">
			<Sidebar />
			<main>
				<Header />
				<Breadcrumb current="Overview" />
				<Profile />
				<section className="boxes">
					<Box style="padding boxshadow short" text="New Pledge Proposal" icon="newproposal.svg"/>
					<Box style="padding boxshadow short" text="Statements and Documents" icon="statement.svg"/>
					<Box style="padding boxshadow wide" text="Make A Payment" icon="makeapayment.svg"/>
				</section>
				<List style="boxshadow" title="Pledges" altText="All Pledges" altLink="/pledges" />
			</main>
		</section>
	)
}