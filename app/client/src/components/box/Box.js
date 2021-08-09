import React from "react"

import './style.css'

export default function Box({style, icon, text, padding}) {
    return (
         <section className={`quickBox ${style}`}>
            <section className="inner">
                <object
                    aria-label="img"
                    data={require(`../../assets/images/${icon}`)}
                />
                <p className="text">{text}</p>
            </section>
         </section>
    )
}