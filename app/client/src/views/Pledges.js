import React from "react"
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Header from "../components/Header/Header";
import List from "../components/list/List";
import Sidebar from "../components/sidebar/Sidebar";
import DataBox from "../components/dataBox/DataBox"



export default function Pledges() {

    const params = useParams()

    return (
      <section className="fullview" id="Home">
        <Sidebar />
        <main>
          <Header />
          <Breadcrumb backLink="/" current={`Pledge number ${params.id}`} />

          <section id="pledgesStatus" className="" >

            <DataBox icon="pocket.svg" classes="quickBox boxshadow short" title="Total Amount" value="$12351" />
            <DataBox icon="pocket.svg" classes="quickBox boxshadow short" title="Remaining Balance" value="$5812" />
            <DataBox icon="pocket.svg" classes="quickBox boxshadow short" title="Monthly Payment" value="$612" />
            <DataBox icon="pocket.svg" classes="quickBox boxshadow short" title="Interest Rate" value="6%" />

          </section>

          <List id="pledgesTransactions" mode="table" style="boxshadow" title="Transactions" options={[
            {'id':'1', 'date':'01/11/2000','desc':'description shall go here', 'amount':'$123', 'balance':'$62913'},
            {'id':'2', 'date':'01/11/2010','desc':'description shall go here2', 'amount':'$5123', 'balance':'$62213'},
            {'id':'3', 'date':'01/11/2020','desc':'description shall go here3', 'amount':'$1823', 'balance':'$62613'},
          ]} />
          
        </main>
      </section>
    )
}