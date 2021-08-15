import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// components
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Field from '../components/form/Field';
import Alaternative from '../components/alaternative/Alaternative';

// CTRL
import { account } from '../../../controller/accountController';

// css
import './style.css';

export default function Register() {

  const [inputForm, setInputForm] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    birth_date: "",
    password: "",
    password_confirm: ""
  });
  const [formErr, setFormErr] = useState({});
  const [state, setState] = useState(false)

  const handleInput = event => {
    const {name, value} = event.target;
    setInputForm({
      ...inputForm,
      [name]: value
    })
  }

  const [box, setBox] = useState(true)
  const boxStatus = () => setBox(!box)
  const onExit = () => setBox(false)

  const handleSubmit = async event => {
    console.log(event.target);
    event.preventDefault()
    const response = await account.register(
      inputForm["first_name"],
      inputForm["last_name"],
      inputForm["email_address"],
      inputForm["password"],
      inputForm["password_confirm"],
    )
    console.log(response);

    if(response.status == 201) {
      setState(true)
    }else{
      var result={};
      for(var i=0; i<Object.keys(response.json).length; i++)
        result[Object.keys(response.json)[i]] = Object.values(response.json)[i][0]
      setFormErr(result);
      console.log(formErr);
    }

  }

  function form() {
    return (
      <section id="formStyle">
        <form onSubmit={handleSubmit} >
          <div className="card">
            <Field valid={formErr.first_name?false:true} message={formErr.first_name} required={true} handleInput={handleInput} value={inputForm} icon="user.svg" title="First Name" type="text" />
            <Field valid={formErr.last_name?false:true} message={formErr.last_name} required={true} handleInput={handleInput} value={inputForm} icon="user.svg" title="Last Name" type="text" />
          </div>
          <Field valid={formErr.email?false:true} message={formErr.email} required={true} handleInput={handleInput} value={inputForm} icon="email.svg" title="Email Address" type="email" />
          <Field valid={formErr.date?false:true} message={formErr.date} required={true} handleInput={handleInput} value={inputForm} icon="date.svg" title="Birth Date" type="date" />
          <Field valid={formErr.password1?false:true} message={formErr.password1} required={true} handleInput={handleInput} value={inputForm} icon="pass.svg" title="Password" type="password" />
          <Field valid={formErr.password2?false:true} message={formErr.password2} required={true} handleInput={handleInput} value={inputForm} icon="pass.svg" title="Password Confirm" type="password" />

          <div className="field valid terms">
            <label className='terms'>
              <div className="block">
                <p className='terms'>
                  By creating an account your agree to our 
                  <Link to="/terms">Term and Condtions</Link>
                </p>
                <input value="accepted" type="checkbox" onChange={handleInput} name="terms" required={true} />
              </div>
            </label>
          </div>
          <input className="submit" type="submit" value="Sign Up" />
        </form>
      </section>
    )
  }

  function next() {
    return (
      <div className="response">
        <p className="message">Your Account is created successfuly.<br/><br/>We have sent you an email to your {inputForm["email_address"]} account, Please confirm the link to activate your account.</p>
      </div>
    )
  }

  return (
    <section id="register" className={`boxModel ${box?'show':''}`}>
      <section className="inner">
        <Breadcrumb
          exit="true"
          exitMode="outer"
          current="Join"
          altLink="signin"
          altTitle="Sign In"
          displayLogo="true"
          mode={true}
          onExit={onExit}
        />
        {state?next():form()}
        </section>
      </section>
  );
}
