import React from "react";

import Breadcrumb from "../breadcrumb/Breadcrumb";
import Searchbar from "../searchbar/Searchbar";
import FriendItemList from "./FriendItemList";

export default function Friends() {
  return (
    <section id="friends">
      <Breadcrumb current="Friends & Family" altTitle="Add" altLink="/new-friend" />
      <br/>
      <Searchbar mode="normal"/>
      <br/>
      <FriendItemList active={true} list={[13, 2, 7]} />
    </section>
  )
}