import React from "react";

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