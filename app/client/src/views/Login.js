import React, { useEffect, useState } from 'react';
import { Route, Redirect, Link, useHistory, useLocation  } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// components
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Field from '../components/form/Field';
import ForgotPass from '../components/forgotpass/ForgotPass';
// css
import './style.css';

// CTRL
import { account } from '../../../controller/accountController';

export default function Login () {

  const history = useHistory();
  const location = useLocation();
  
  const [inputForm, setInputForm] = useState({
    email_address: "",
    password: ""
  });
  const [formErr, setFormErr] = useState({});
  const [box, setBox] = useState(true)


  const handleInput = event => {
    const {name, value} = event.target;
    setInputForm({
      ...inputForm,
      [name]: value
    })
  }

  const boxStatus = () => setBox(!box)
  const onExit = () => setBox(false)

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await account.login(
      inputForm["email_address"],
      inputForm["password"],
    )

    console.log("response", response);
    
    if(response.status != 200) {
      console.log("fail", response.message)
      var result={};
      for(var i=0; i<Object.keys(response.json).length; i++)
      result[Object.keys(response.json)[i]] = Object.values(response.json)[i][0]
      setFormErr(result);
    } else {
      console.log("ok", response.message);
      if(location.state){
        console.log(location.state.backto);
        history.push(location.state.backto)
      }else{
        history.push("/")
      }
    }
    
  }



  const googleResponse = (response) => {
    console.log("response", response.accessToken);
    account.googleLogin(response.accessToken)
  }
  const fbResponse = (response) => {
    console.log(response);
  }


  return(
    <section id="Login" className={`boxModel ${box?'show':''}`}>
      <section className="inner">

        <Breadcrumb
          exit="true"
          exitMode="outer"
          current="Welcome to"
          altLink="signup"
          altTitle="Sign Up"
          displayLogo="true"
          mode={true}
          onExit={onExit}
        />

        <section id="formStyle">
          <form onSubmit={handleSubmit} >
            <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} onChange={handleInput} value={inputForm.email_address} icon="email.svg" title="Email Address" type="email" />
            <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} onChange={handleInput} value={inputForm.password} icon="pass.svg" title="Password" type="password" />
            <input className="submit" type="submit" value="Sign In" />
          </form>
        </section>
        <ForgotPass />
        <section id="alaternative">


          <GoogleLogin
            clientId="972265831931-4rvcab45h0tg92ojirnruv1h2lolob1n.apps.googleusercontent.com"
            buttonText="Sign in with google"
            onSuccess={googleResponse}
            onFailure={googleResponse}
          />


          <FacebookLogin
            textButton="Sign in with facebook"
            appId= "<FACEBOOK APP ID>"
            fields="name,email,picture"
            callback={fbResponse}
            render={renderProps => (
              <button onClick={renderProps.onClick} type="button" style={{backgroundColor: 'rgb(255, 255, 255)', display: 'inline-flex', alignItems: 'center', color: 'rgba(0, 0, 0, 0.54)', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px', padding: '0px', borderRadius: '2px', border: '1px solid transparent', fontSize: '14px', fontWeight: 500, fontFamily: 'Roboto, sans-serif'}}><div style={{marginRight: '10px', background: 'rgb(255, 255, 255)', padding: '10px', borderRadius: '2px'}}><svg xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="24px" height="24px"><g id="surface38459121"><path d="M 17.523438 9 L 14 9 L 14 7 C 14 5.96875 14.085938 5.316406 15.5625 5.316406 L 17.429688 5.316406 L 17.429688 2.136719 C 16.523438 2.042969 15.609375 1.996094 14.691406 2 C 11.980469 2 10 3.65625 10 6.699219 L 10 9 L 7 9 L 7 13 L 10 13 L 10 22 L 14 22 L 14 12.996094 L 17.066406 12.996094 Z M 17.523438 9 " style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(24, 119, 242)', fillOpacity: 1}} /></g></svg></div><span style={{padding: '10px 10px 10px 0px', fontWeight: 500}}>Sign in with facebook</span></button>
            )}
          /> 
        </section>
        {/* <Alaternative action="login" /> */}
      </section>
    </section>
  )
  
}
