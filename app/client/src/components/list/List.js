var parse = require('html-react-parser');
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom" 
import Item from "./Item"

import './style.css'
export default function List({icon, stylestyle, style, title, altText, options, link, mode}) {

  const [count, setCount] = useState(2)
  const [full, setFull] = useState(true)
  const [pageCount, setPageCount] = useState(1)
  
  function withLink(key) {
    return (<Link to={`/${link}/${key['id']}`}>
      <Item icon={icon} mode={mode} data={key} key={key['id']} label1="Account No." data1={key['account']} label2="Balance" data2={`$${key['balance']}`} />
    </Link>)
  }

  function withoutLink(key) {
    return <Item icon={icon} mode={mode} data={key} key={key['id']} label1="Account No." data1={key['account']} label2="Balance" data2={`$${key['balance']}`} />
  }
  
  function list(key) {
    return link?withLink(key):withoutLink(key)
  }

  function table() {
    return (
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
    )
  }

  const MoreOfList = () => {
    setFull(!full)
    full?setCount(options.length):setCount(2)
  }

  const paginationHandler = (step) => {
    // setCount(6)
  }

  function item() {
    return (
      <>
        <section className="head">
          <p>{title}</p>
          <p onClick={MoreOfList} className="pClick">{altText}</p>
        </section>
        <hr/>
        <section className="body">
          {options.map((data, key)=>
            key<=count?list(data):''
          )}
          <ul className="pagination">
            {options.map((data, key)=>
              key/6%1==0>6?(
                <li className="pagination_link" onClick={paginationHandler} key={(key/6)+1}>{(key/6)+1}</li>
              ):''
            )}
          </ul>
        </section>
      </>
    )
  }


  function display() {
    switch (mode) {
      case "table":
        return table()
      default:
        return item()
    }
  }
  
  return (
    <section style={stylestyle} id="list" className={`${style} ${mode}`}>
      <section className="inner detailedbox">
        {display()}
      </section>
    </section>
  )
}