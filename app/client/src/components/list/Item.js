import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom" 
import Breadcrumb from "../breadcrumb/Breadcrumb"
import persone from '../../assets/images/person.jpg'

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

    function account() {
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


    function profile() {
      return (
        <div className="FriendItem item">
          <div className="info">
            <img src={persone} />
            <div className="text">
              <p className="name">Anthony Smith</p>
              <p className="email">anthony@creative.com</p>
            </div>
          </div>
          <object
            aria-label="img"
            data={require(`../../assets/images/${icon}`)}
          />
        </div>
      )
    }

    function display() {
      switch (mode) {
        case "table":
          return table()
        case "account":
          return account()
        case "profile":
          return profile()
        default:
          break;
      }
    }

    return display()
}