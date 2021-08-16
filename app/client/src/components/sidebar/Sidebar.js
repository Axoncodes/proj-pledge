import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import './style.css';

import logo from '../../assets/images/logo.png'
import edit_icon from '../../assets/images/edit.svg'
import person from '../../assets/images/person.jpg'
import { profileInfo } from "../../../../controller/profileController";

export default function Sidebar() {

  const [profile, setProfile] = useState('')
  const getUserInfo = async () => {
    const response = await profileInfo.viewProfile();
    setProfile(response['data'])
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  return(
    <section id="sidebar">

      <div id="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>

      <section id="userinfo_display">
        <Link to="/edit-profile">
          <div className="edit">
            <img src={edit_icon} />
          </div>
        </Link>

        <div className="user_img">
          <img src={profile['profile_photo']} />
          <img src={person} />
        </div>

        <div className="username_holder">
          <p id="username">{profile['first_name']} {profile['last_name']}</p>
          <p id="user_age">{profile['age']}</p>
        </div>

        <p id="user_email">{profile['email']}</p>

      </section>

      <section id="sidebarMenu">

        <p className="menu_title">Menu</p>
        <ul className="sidebar_menu">
          <li>
            <Link to="/payments">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
              <span>payments</span>
            </Link>
          </li>
        </ul>

        <p className="menu_title">Help & Support</p>
        <ul className="sidebar_menu">
          <li>
            <Link to="/profile-edit">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <span>profile-edit</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              <span>notification</span>
            </Link>
          </li>
        </ul>
      </section>

    </section>
  )
}