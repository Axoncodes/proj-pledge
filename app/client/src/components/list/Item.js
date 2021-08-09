import React from "react"
import { Link } from "react-router-dom" 

export default function Item({icon, label1, data1, label2, data2}) {
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