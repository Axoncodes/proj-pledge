import React from "react";

import Breadcrumb from "../breadcrumb/Breadcrumb";
import Searchbar from "../searchbar/Searchbar";
import FriendItemList from "./FriendItemList";
import NewFriend from "../../views/NewFriend";

export default function Friends() {
  return (
    <section id="friends">
      <Breadcrumb current="Friends & Family" altTitle="Add" ><NewFriend /></Breadcrumb>
      <br/>
      <Searchbar mode="normal"/>
      <br/>
      <FriendItemList active={true} list={[13, 2, 7]} />
    </section>
  )
}