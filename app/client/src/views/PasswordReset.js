import React, { useEffect, useState } from 'react';
import { Route, Redirect, Link, useHistory, useParams } from 'react-router-dom';
// components
import Field from '../components/form/Field';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
// CTRL
import { account } from '../../../controller/accountController';
export default function NewPass() {

  const params = useParams()
  let history = useHistory();

  const [inputForm, setInputForm] = useState({
    password: "",
    password_confirm: ""
  });
  const [formErr, setFormErr] = useState({});
  const [redirect, setRedirect] = useState(false);
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
    console.log(event.target);
    event.preventDefault()
    const response = await account.passwordVerify(
      inputForm["password"],
      inputForm["password_confirm"],
      params.uid,
      params.token,
    )
    
    if(response.status != 200) {
      console.log(response)
      var result={};
      for(var i=0; i<Object.keys(response).length; i++)
      result[Object.keys(response)[i]] = Object.values(response)[i][0]
      setFormErr(result);
    } else {
      console.log(response.status);
      // return <Home />
      setState(true)
      setFormMessage(response.json.detail);
      await account.logou();
      // history.push("/signin")
      // setRedirect(true)
    }
    
  }





  function form() {
    return(
      <form onSubmit={handleSubmit}>
        <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} icon="pass.svg" title="Password" type="password" />
        <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} icon="pass.svg" title="Password Confirm" type="password" />
        <input className="submit" type="submit" value="Confirm" />
      </form>
    )
  }

  function sent() {
    return(
      <div className="response">
        <p className="message">{formMessage}</p>
        <Link to="/signin"><p className="again" >Go to sign in</p></Link>
      </div>
    )
  }

  return (
    <section id="NewPass" className="boxModel">
      <section className="inner">
        <Breadcrumb
          exit="true"
          exitMode="outer"
          current="Fill in your new password"
        />
        {state?sent():form()}
      </section>
    </section>
  );

}
