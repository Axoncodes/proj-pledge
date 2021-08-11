import React from "react"

import persone from '../../assets/images/person.jpg'
import Checkbox from "../checkbox/Checkbox"

export default function NormalItem({active}) {
    return (
        <div className="normalSearchResults">
            <div className="info">
                <img src={persone} />
                <div className="text">
                    <p className="name">Anthony Smith</p>
                    <p className="email">anthony@creative.com</p>
                </div>
            </div>
            <Checkbox active={active} />
        </div>
    )
}