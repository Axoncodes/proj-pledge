import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Field from '../components/form/Field';
import ProfilePic from '../components/profilepic/ProfilePic';
import Box from '../components/box/Box';



export default function EditProfile() {

    const [formErr, setFormErr] = useState({});
    const [inputForm, setInputForm] = useState({
        email_address: "",
        password: ""
    });

    const handleSubmit = async event => {

        console.log(event.target);
        event.preventDefault()
        const response = await account.login(
          inputForm["email_address"],
          inputForm["password"],
        )
        
        if(response.status != 200) {
          console.log(response.json)
          var result={};
          for(var i=0; i<Object.keys(response.json).length; i++)
          result[Object.keys(response.json)[i]] = Object.values(response.json)[i][0]
          setFormErr(result);
        } else {
          console.log(response.status);
        }
        
    }
    
    const handleInput = event => {

        const {name, value} = event.target;
        setInputForm({
          ...inputForm,
          [name]: value
        })

    }

    return (
        <section className="fullview" id="editProfile">
            <Sidebar />
            <main>
                <Header />
                <Breadcrumb current="Additional Information" backLink="/" />
                
                <section className="boxes" style={{gridTemplateColumns: "unset", gridAutoFlow: "column" }}>
                  
                  <section style={{padding: "20px 15px"}} className="quickBox boxshadow short">
                    <Link to="/identity-verification">
                      <section className="inner">
                        <object
                          aria-label="img"
                          data={require(`../assets/images/pocket.svg`)}
                        />
                        <div style={{display: "grid", rowGap: "7px" }}>
                          <p className="title" style={{margin: 0, fontSize: "16px", color: "#202046" }}>Identity Verification</p>
                          <p className="text" style={{margin: 0, fontSize: "14px", color: "#9CA2AA" }}>Additional Borrower Information to be included in your contract</p>
                        </div>
                      </section>
                    </Link>
                  </section>

                </section>
                <form className="boxshadow" onSubmit={handleSubmit} >
                  <div className="card" style={{gridTemplateColumns: "min-content auto"}}>
                    <ProfilePic />
                    <div style={{display: "grid", rowGap: "10px"}}>
                      <Field nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="First Name" type="text" />
                      <Field nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Last Name" type="text" />
                    </div>
                  </div>
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Biography" type="textarea" />
                  <input className="submit" type="submit" value="Update" />
                </form>
            </main>
        </section>
    )
}