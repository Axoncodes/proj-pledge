import React from "react"
import { Link } from "react-router-dom" 
import Item from "./Item"

import './style.css'
export default function List({style, title, altText, altLink}) {
    return (
        <section id="list" className={style}>
            <section className="head">
                 <p>{title}</p>
                 <Link to={altLink}>{altText}</Link>
            </section>
            <hr/>
            <section className="body">
                <Item icon="cart.svg" label1="Account No." data1="031415" label2="Balance" data2="$2356.21" />
            </section>
        </section>
    )
}