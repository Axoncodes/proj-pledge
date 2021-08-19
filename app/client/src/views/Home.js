import React, { useEffect } from 'react';

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
				<Profile stylestyle={{paddingBottom: "28px"}} aboutTitle="About" classes="boxshadow" />
				<section className="boxes">
					<Box link="/new-pledge" style="padding boxshadow short" text="New Pledge Proposal" icon="newproposal.svg"/>
					<Box link="/" style="padding boxshadow short" text="Statements and Documents" icon="statement.svg"/>
					<Box link="/" style="padding boxshadow wide" text="Make A Payment" icon="makeapayment.svg"/>
				</section>
				<List icon="cart.svg" mode="account" link="pledges" style="boxshadow" title="Pledges" altText="All Pledges" options={[{'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}, {'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}, {'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}, ]} />
				<section className="box goFullOnMobile">
					<List icon="receive.svg" mode="profile" link="pledges" style="boxshadow" title="Pledges" altText="All Pledges" options={[{'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}]} />
					<List icon="send.svg" mode="profile" link="pledge-recieved" style="boxshadow" title="Pledge Proposals Received" altText="All Pledges Recieved" options={[{'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}, {'id':'3', 'account':'0543','balance':'93340'}]} />
				</section>
			</main>
		</section>
	)
}