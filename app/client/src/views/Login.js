import React from 'react'

// components
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import LoginForm from '../components/form/Login'
import Alaternative from '../components/alaternative/Alaternative'

export default function Login() {
  return(
    <section id="register">
      <section className="inner">
      <Breadcrumb exit="true" exit_mode="outer" current="Welcome to" alt_link="signup" alt_title="Sign Up" display_logo="true"/>
      <LoginForm />
      <Alaternative action="login" />
      </section>
    </section>
  )
}