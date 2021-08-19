import React, { useEffect } from 'react';

import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Box from '../components/box/Box';
import List from '../components/list/List';
import Profile from '../components/profile/Profile';

export default function PledgesRecieved() {

	return(
		<section className="fullview single" id="Home" style={{backgroundColor: "#FAFAFA"}}>
            <section className="inner">
                <Breadcrumb style={{padding: "26px 0", width: "fit-content", margin: "0 auto"}} current="Pledge Proposal Landing Page" />
                <main className="boxshadow centerboxshadow">
                    <Profile aboutTitle="Dear Friends & Family," />
                    <section className="boxes" style={{gridTemplateColumns: "auto auto auto"}}>
                        <Box link="/" stylestyle={{gridRow: 1, gridColumn: "1/4"}} style="padding center wide" text="Make A Payment" icon="makeapayment.svg"/>
                        <Box link="/" stylestyle={{gridRow: 2}} style="padding short" text="New Pledge Proposal" icon="newproposal.svg"/>
                        <Box link="/" stylestyle={{gridRow: 2}} style="padding short" text="Statements and Documents" icon="statement.svg"/>
                        <Box link="/" stylestyle={{gridRow: 2}} style="padding short" text="Statements and Documents" icon="statement.svg"/>
                    </section>
                    {/* <section className="boxes">
                        <Box link="/new-pledge" style="padding boxshadow short" text="New Pledge Proposal" icon="newproposal.svg"/>
                        <Box link="/" style="padding boxshadow short" text="Statements and Documents" icon="statement.svg"/>
                        <Box link="/" style="padding boxshadow wide" text="Make A Payment" icon="makeapayment.svg"/>
                    </section>
                    <List icon="cart.svg" mode="account" link="pledges" style="boxshadow" title="Pledges" altText="All Pledges" options={[{'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}, {'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}, {'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}, ]} />
                    <section className="boxFlex goFullOnMobile">
                        <List icon="receive.svg" stylestyle={{width: "43%"}} mode="profile" link="pledges" style="boxshadow" title="Pledges" altText="All Pledges" options={[{'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}]} />
                        <List icon="send.svg" stylestyle={{width: "43%"}} mode="profile" link="pledge-recieved" style="boxshadow" title="Pledge Proposals Received" altText="All Pledges Recieved" options={[{'id':'1', 'account':'04123','balance':'4123'}, {'id':'2', 'account':'4127', 'balance':'4126123'}, {'id':'3', 'account':'0543','balance':'93340'}, {'id':'3', 'account':'0543','balance':'93340'}]} />
                    </section> */}
                </main>
            </section>
		</section>
	)

}