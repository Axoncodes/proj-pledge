import React from 'react'

// components
import Field from './Field'

// CTRLer
import accountController from '../../../../controller/accountController'

export default function RegisterForm() {
  return(
    <section id="register_form">
      <form>
        <div className="card">
          <Field icon="user.svg" title="First Name" type="text" />
          <Field icon="user.svg" title="Last Name" type="text" />
        </div>
        <Field icon="email.svg" title="Email Address" type="email" />
        <Field icon="date.svg" title="Birth Date" type="date" />
        <Field icon="pass.svg" title="Password" type="password" />
        <Field icon="pass.svg" title="Password Confirm" type="password" />
        <Field type="checkbox" title="By creating an account your agree to our" link="Term and Condtions" />
        <Field title="Sign Up" type="submit" />
      </form>
    </section>
  )
}