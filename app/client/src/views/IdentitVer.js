import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Field from '../components/form/Field';
import ProfilePic from '../components/profilepic/ProfilePic';
import Box from '../components/box/Box';



export default function IdentitVer() {

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
                <Breadcrumb current="Identity Verification" backLink="/edit-profile" />
  
                <form className="boxshadow" onSubmit={handleSubmit} >
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Date of birth" type="date" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Country" type="select" options={["item1", "item2", "item3"]} />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="City" type="text" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="State" type="select" options={["item1", "item2", "item3"]} />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Address Line 1" type="string" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Address Line 2" type="string" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Email Address" type="email" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Phone Number" type="number" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Zip code" type="number" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="ID upload" type="file" />
                  <input className="submit" type="submit" value="Update" />
                </form>
                
            </main>
        </section>
    )
}