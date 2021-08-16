import React from "react"
import { Link, useParams } from 'react-router-dom';
import Box from "../components/box/Box";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Header from "../components/Header/Header";
import List from "../components/list/List";
import Sidebar from "../components/sidebar/Sidebar";


export default function Pledges() {

    const params = useParams()

    return (
      <section className="fullview" id="Home">
        <Sidebar />
        <main>
          <Header />
          <Breadcrumb backLink="/" current={`Pledge number ${params.id}`} />
          <section className="boxes" style={{gridTemplateColumns: "auto auto auto auto"}}>

          <section className="boxes" style={{gridTemplateColumns: "unset", gridAutoFlow: "column" }}>
            <section style={{padding: "20px 15px"}} className="quickBox boxshadow short">
              <Link to="/identity-verification">
                <section className="inner">
                  <object
                    aria-label="img"
                    data={require(`../../src/assets/images/pocket.svg`)}
                  />
                  <div style={{display: "grid", rowGap: "7px" }}>
                    <p className="title" style={{margin: 0, fontSize: "16px", color: "#202046" }}>Total Amount</p>
                    <p className="text" style={{margin: 0, fontSize: "14px", color: "#9CA2AA" }}>$12351</p>
                  </div>
                </section>
              </Link>
            </section>
          </section>


          <section className="boxes" style={{gridTemplateColumns: "unset", gridAutoFlow: "column" }}>
            <section style={{padding: "20px 15px"}} className="quickBox boxshadow short">
              <Link to="/identity-verification">
                <section className="inner">
                  <object
                    aria-label="img"
                    data={require(`../../src/assets/images/pocket.svg`)}
                  />
                  <div style={{display: "grid", rowGap: "7px" }}>
                    <p className="title" style={{margin: 0, fontSize: "16px", color: "#202046" }}>Remaining Balance</p>
                    <p className="text" style={{margin: 0, fontSize: "14px", color: "#9CA2AA" }}>$5812</p>
                  </div>
                </section>
              </Link>
            </section>
          </section>


          <section className="boxes" style={{gridTemplateColumns: "unset", gridAutoFlow: "column" }}>
            <section style={{padding: "20px 15px"}} className="quickBox boxshadow short">
              <Link to="/identity-verification">
                <section className="inner">
                  <object
                    aria-label="img"
                    data={require(`../../src/assets/images/pocket.svg`)}
                  />
                  <div style={{display: "grid", rowGap: "7px" }}>
                    <p className="title" style={{margin: 0, fontSize: "16px", color: "#202046" }}>Monthly Payment</p>
                    <p className="text" style={{margin: 0, fontSize: "14px", color: "#9CA2AA" }}>$612</p>
                  </div>
                </section>
              </Link>
            </section>
          </section>


          <section className="boxes" style={{gridTemplateColumns: "unset", gridAutoFlow: "column" }}>
            <section style={{padding: "20px 15px"}} className="quickBox boxshadow short">
              <Link to="/identity-verification">
                <section className="inner">
                  <object
                    aria-label="img"
                    data={require(`../../src/assets/images/pocket.svg`)}
                  />
                  <div style={{display: "grid", rowGap: "7px" }}>
                    <p className="title" style={{margin: 0, fontSize: "16px", color: "#202046" }}>Interest Rate</p>
                    <p className="text" style={{margin: 0, fontSize: "14px", color: "#9CA2AA" }}>%6</p>
                  </div>
                </section>
              </Link>
            </section>
          </section>

          </section>
          <List mode="table" style="boxshadow" title="Transactions" options={[
            {'id':'1', 'date':'01/11/2000','desc':'description shall go here', 'amount':'$123', 'balance':'$62913'},
            {'id':'2', 'date':'01/11/2010','desc':'description shall go here2', 'amount':'$5123', 'balance':'$62213'},
            {'id':'3', 'date':'01/11/2020','desc':'description shall go here3', 'amount':'$1823', 'balance':'$62613'},
          ]} />
        </main>
      </section>
    )
}