import { Link } from 'react-router-dom'
import React from 'react'
// css
import './style.css'
// assets
import logo from '../../assets/images/logo.png'

export default function Breadcrumb({exit, exit_mode, backLink, current, alt_link, alt_title, display_logo}) {
  return(
    <section id="breadcrumb">
      {exit?<svg id="exit" className={exit_mode} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>:""}
      <div className="inner_cover">
        <p className="current">{current}</p>
        <div className="block">
          {backLink?<Link to={backLink}><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/></svg></Link>:""}
          {display_logo?<Link to="/"><img className="logo" src={logo} /></Link>:""}
          {alt_link?<Link className="altlink" to={alt_link}>{alt_title}</Link>:""}
        </div>
      </div>
    </section>
  )
}