import React from 'react'

// components
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import RegisterForm from '../components/form/Register'
import Alaternative from '../components/alaternative/Alaternative'

export default function Register() {
  return(
    <section id="register">
      <section className="inner">
      <Breadcrumb exit="true" exit_mode="outer" current="Join" alt_link="signin" alt_title="Sign In" display_logo="true"/>
      <RegisterForm />
      <Alaternative action="signup" />
      </section>
    </section>
  )
}