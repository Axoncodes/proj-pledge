import React, { useEffect, useState } from 'react';

// components
import Field from '../components/form/Field';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

// CTRL
import { account } from '../../../controller/accountController';

export default function ForgotPass() {

  const [inputForm, setInputForm] = useState({
    email_address: ""
  });
  const [formErr, setFormErr] = useState({});
  const [state, setState] = useState(false)
  const [formMessage, setFormMessage] = useState()

  const handleInput = event => {
    const {name, value} = event.target;
    setInputForm({
      ...inputForm,
      [name]: value
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(event.target);
    const response = await account.passwordReset(
      inputForm["email_address"],
    )

    if(response.status != 200) {
      console.log(response.json)
      var result={};
      for(var i=0; i<Object.keys(response.json).length; i++)
      result[Object.keys(response.json)[i]] = Object.values(response.json)[i][0]
      setFormErr(result);
    } else {
      console.log(response.status);
      setFormMessage(response.json.detail);
      setState(true)
    }

  }

  
  const [box, setBox] = useState(true)
  const boxStatus = () => setBox(!box)
  const onExit = () => setBox(false)


  function form() {
    return(
      <form onSubmit={handleSubmit} >
        <Field valid={formErr.email?false:true} message={formErr.email} required={true} handleInput={handleInput} value={inputForm} icon="email.svg" title="Email Address" type="email" />
        <input className="submit" type="submit" value="Recover" />
      </form>
    )
  }

  function sent() {
    return(
      <div className="response">
        <p className="message">{formMessage}</p>
        <p className="again" onClick={sendAgain} >Didn't recieve the email?</p>
      </div>
    )
  }


  const sendAgain = async () => {
    const response = await account.passwordReset(
      inputForm["email_address"],
    )

    if(response.status != 200) {
      console.log(response.json);
      setFormMessage(response.json.detail);
    } else {
      console.log(response.status);
      setFormMessage(response.json.detail);
    }
  }



  return (
    <section id="Forgot" className={`boxModel ${box?'show':''}`}>
      <section className="inner">
        <Breadcrumb
          exit="true"
          exitMode="outer"
          current="Password Recovery"
          backLink="/signin"
					altLink="/signup"
          altTitle="Sign Up"
          onExit={onExit}
        />
        {state?sent():form()}
      </section>
    </section>
  );
}

