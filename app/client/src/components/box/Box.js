import React from "react"
import { Link } from 'react-router-dom';
import './style.css'

export default function Box({style, icon, text, padding, link}) {
    return (
         <section className={`quickBox ${style}`}>
            <Link to={link} className={link?"":"disabled_link"}>
                <section className="inner">
                    <object
                        aria-label="img"
                        data={require(`../../assets/images/${icon}`)}
                    />
                    <p className="text">{text}</p>
                </section>
            </Link>
         </section>
    )
}