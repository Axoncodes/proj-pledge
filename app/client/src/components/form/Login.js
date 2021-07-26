import React from 'react'

// components
import Field from './Field'

export default function LoginForm() {
  return(
    <section id="register_form">
      <form>
        <Field icon="email.svg" title="Email Address" type="email" />
        <Field icon="pass.svg" title="Password" type="password" />
        <Field title="Sign In" type="submit" />
      </form>
    </section>
  )
}