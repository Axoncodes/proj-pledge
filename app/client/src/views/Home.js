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

	const [auth, setAuth] = useState(null)
	let history = useHistory();

	const authenticate = async () => {
		setAuth(await account.authorised());
	}

	useEffect(()=>{
		authenticate()
	}, [])



	function login() {
		history.push({
			pathname: "/signin",
			state: {  // location state
				backto: "/", 
			},
		})
	}
	function view() {
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


	const load = () =>{
		if(auth === null){
			return "loading..."
		}else if(auth === true){
			return view()
		}else if(auth === false){
			 login()
			 return "signin"
		}else{
			console.log(auth);
			return <p>{auth}</p>;
		}
	}
	return load()



}