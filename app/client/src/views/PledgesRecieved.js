import React, { useEffect } from 'react';

import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Box from '../components/box/Box';
import List from '../components/list/List';
import Profile from '../components/profile/Profile';
import DataBox from '../components/dataBox/DataBox';

export default function PledgesRecieved() {

	return(
		<section className="fullview single" id="Home" style={{backgroundColor: "#FAFAFA"}}>
            <section className="inner">
                <Breadcrumb style={{padding: "26px 0", width: "fit-content", margin: "0 auto"}} current="Pledge Proposal Landing Page" />
                <main className="boxshadow centerboxshadow">
                    <Profile aboutTitle="Dear Friends & Family," />
                    <section className="boxes" style={{gridTemplateColumns: "auto auto auto"}}>
                        <DataBox stylestyle={{gridRow: 1, gridColumn: "1/4"}} title="Total Amount" value="$12351" />
                        <DataBox stylestyle={{}} title="Total Amount" value="$12351" />
                        <DataBox stylestyle={{}} title="Total Amount" value="$12351" />
                        <DataBox stylestyle={{}} title="Total Amount" value="$12351" />
                        {/* <Box style="padding center wide" text="Make A Payment" icon="makeapayment.svg"/> */}
                        {/* <Box stylestyle={{gridRow: 2}} style="padding short" text="New Pledge Proposal" icon="newproposal.svg"/>
                        <Box stylestyle={{gridRow: 2}} style="padding short" text="Statements and Documents" icon="statement.svg"/>
                        <Box stylestyle={{gridRow: 2}} style="padding short" text="Statements and Documents" icon="statement.svg"/> */}
                    </section>
                </main>
            </section>
		</section>
	)

}