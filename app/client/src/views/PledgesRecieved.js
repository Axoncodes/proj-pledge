import React from 'react';

import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Profile from '../components/profile/Profile';
import DataBox from '../components/dataBox/DataBox';
import Field from '../components/form/Field';
import PledgeButtons from '../components/pledgeButtons/PledgeButtons';

export default function PledgesRecieved() {

	return(
		<section className="fullview single" id="Home" style={{backgroundColor: "#FAFAFA"}}>
            <section className="inner">
                <Breadcrumb style={{padding: "26px 0", width: "fit-content", margin: "0 auto"}} current="Pledge Proposal Landing Page" />
                <main className="boxshadow centerboxshadow" style={{paddingBottom: "40px"}}>
                    <Profile stylestyle aboutTitle="Dear Friends & Family," stylestyle={{}} />
                    <section className="boxes" style={{gridTemplateColumns: "auto auto auto"}}>
                        <DataBox classes="boldValue quickBox short center" stylestyle={{gridRow: 1, gridColumn: "1/4"}} title="Amount" value="$12351" />
                        <DataBox classes="doubleBlack quickBox short left" title="INTEREST RATE" value="6.0%" />
                        <DataBox classes="doubleBlack quickBox short left" title="MONTHLY PAYMENT" value="$12351" />
                        <DataBox classes="doubleBlack quickBox short left" title="TERM" value="13 Monthes" />
                    </section>
                    <Field valid={true} icon="dollar.svg" value="Job at Starbucks 4 days a week" title="Repayment Source:" type="string" />
                </main>
                <PledgeButtons />
            </section>
		</section>
	)
}