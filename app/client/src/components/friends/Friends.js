import React from "react";

import Breadcrumb from "../breadcrumb/Breadcrumb";
import Searchbar from "../searchbar/Searchbar";
export default function Friends() {
    return (
        <section id="friends">
            <Breadcrumb current="Friends & Family" altTitle="Add" altLink="/new-friend" />
            <Searchbar mode="normal"/>
        </section>
    )
}