import React from 'react'
import { Link } from 'react-router-dom'
// css
import './style.css'

export default function Fields({icon, title, type, link}) {
  return(
    <div className="field">
      <label className={link?"terms":"" + type=="submit"?"submit":""} >
        {icon?<div className="image">
          <object data={require(`../../assets/images/${icon}`)} />
        </div>:""}
        <div className="block">
          {type!="submit"?
            <p className={link?"terms":""}>
              {title}
              <Link to="/terms">{link}</Link>
            </p>
          :""}
          <input value={type=="submit"?title:""} placeholder={title} type={type} />
        </div>
      </label>
    </div>
  )
}