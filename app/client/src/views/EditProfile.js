import React, { useEffect, useState } from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Field from '../components/form/Field';

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
                <form onSubmit={handleSubmit} >
                    <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Address 1" type="text" />
                    <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="Address 2" type="text" />
                    <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="City" type="text" />
                    <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} handleInput={handleInput} value={inputForm} title="ss #" type="text" />
                    <input className="submit" type="submit" value="Update" />
                </form>
            </main>
        </section>
    )
}