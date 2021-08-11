import React from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Box from '../components/box/Box';
import List from '../components/list/List';
import Profile from '../components/profile/Profile';

export default function Home() {

	return(
		<section className="fullview" id="Home">
			<Sidebar />
			<main>
				<Header />
				<Breadcrumb current="Overview" />
				<Profile />
				<section className="boxes">
					<Box link="/new-pledge" style="padding boxshadow short" text="New Pledge Proposal" icon="newproposal.svg"/>
					<Box style="padding boxshadow short" text="Statements and Documents" icon="statement.svg"/>
					<Box style="padding boxshadow wide" text="Make A Payment" icon="makeapayment.svg"/>
				</section>
				<List style="boxshadow" title="Pledges" altText="All Pledges" altLink="/pledges" />
			</main>
		</section>
	)

}