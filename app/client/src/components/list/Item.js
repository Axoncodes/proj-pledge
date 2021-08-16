import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom" 
import Breadcrumb from "../breadcrumb/Breadcrumb"


export default function Item({icon, label1, data1, label2, data2, mode, data}) {

    function table() {
      return (
        <tr>
          <td className="balance">{data.balance}</td>
          <td className="amount">{data.amount}</td>
          <td className="date">{data.date}</td>
          <td className="desc">{data.desc}</td>
        </tr>
      )
    }

    function item() {
      return (
        <section className="item">
          <object
            aria-label="img"
            data={require(`../../assets/images/${icon}`)}
          />
          <div className="data">
            <div className="box">
              <span>{label1}</span>
              <p>{data1}</p>
            </div>
            <div className="box">
              <span>{label2}</span>
              <p>{data2}</p>
            </div>
          </div>
        </section>
      )
    }

    return mode=="table"?table():item()
}