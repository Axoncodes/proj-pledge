import React from "react"
import { Link } from "react-router-dom" 
import Item from "./Item"

import './style.css'
export default function List({style, title, altText, altLink, options, link, mode}) {
  
  function withLink(key) {
    return <Link to={`/${link}/${key['id']}`}>
      <Item mode={mode} data={key} key={key['id']} icon="cart.svg" label1="Account No." data1={key['account']} label2="Balance" data2={`$${key['balance']}`} />
    </Link>
  }

  function withoutLink(key) {
    return <Item mode={mode} data={key} key={key['id']} icon="cart.svg" label1="Account No." data1={key['account']} label2="Balance" data2={`$${key['balance']}`} />
  }
  
  function list(key) {
    if(link) return withLink(key)
    else return withoutLink(key)
  }
  
  return (
    <section id="list" className={`${style} ${mode}`}>
      <section className="inner detailedbox">
        {mode=="table"?(
          <table>
            <thead>
              <tr>
                <th>Balance</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Description</th>
              </tr>
            </thead>
            <hr />
            <tbody>
              {options.map((key)=>
                list(key)
              )}
            </tbody>
          </table>
        ):(
          <>
            <section className="head">
              <p>{title}</p>
              <Link to={altLink}>{altText}</Link>
            </section>
            <hr/>
            <section className="body">
              {options.map((key)=>
                list(key)
              )}
            </section>
          </>
        )}
      </section>
    </section>
  )
}