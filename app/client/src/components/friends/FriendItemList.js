import React from "react";

import persone from '../../assets/images/person.jpg'
import Checkbox from "../checkbox/Checkbox"
import FriendItem from "./FriendItem";

import './style.css';

export default function FriendItemList({list}) {
    return (
        <section id="FriendItemList">
        {list.map((key)=>(
            <FriendItem id={key} key={key} />
        ))}
        </section>
    )
}