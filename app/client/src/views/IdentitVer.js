import React, { useEffect, useState } from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Field from '../components/form/Field';
import { profileInfo } from '../../../controller/profileController';



export default function IdentitVer() {

    const [formErr, setFormErr] = useState({});
    const [inputForm, setInputForm] = useState({
      date_of_birth: "",
      country: "",
      city: "",
      state: "",
      address_line_1: "",
      address_line_2: "",
      email_address: "",
      phone_number: "",
      zip_code: "",
      // id_card: "",
    });

    const handleSubmit = async event => {
      console.log(event.target);
      event.preventDefault()
      const response = await profileInfo.editAdditionalInformation(
        inputForm["date_of_birth"],
        inputForm["country"],
        inputForm["state"],
        inputForm["city"],
        inputForm["address_line_1"],
        inputForm["address_line_2"],
        inputForm["phone_number"],
        // inputForm["id_card"],
        inputForm["zip_code"],
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

    const getUserInfo = async () => {
      const response = await profileInfo.viewAdditionalInformation();
      const countries = await profileInfo.countries();
      const states = await profileInfo.states();
      setInputForm({
        date_of_birth: response['data']['birth_date'],
        // country: countries.names,
        // state: states.names,
        // city: response['data']['city'],
        country: response['data']['country'],
        state: response['data']['state'],
        city: response['data']['city'],
        address_line_1: response['data']['address_1'],
        address_line_2: response['data']['address_2'],
        phone_number: response['data']['phone_number'],
        // id_card: response['data']['id_card'],
        zip_code: response['data']['zip_code'],
      })
    }

    useEffect(() => {
      getUserInfo()
    }, [])

    return (
        <section className="fullview" id="editProfile">
            <Sidebar />
            <main>
                <Header />
                <Breadcrumb current="Identity Verification" backLink="/edit-profile" />
  
                <form className="boxshadow" onSubmit={handleSubmit} >
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.date_of_birth} title="Date of birth" type="date" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.country} title="Country" type="string" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.city} title="City" type="string" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.state} title="State" type="string" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.address_line_1} title="Address Line 1" type="string" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.address_line_2} title="Address Line 2" type="string" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.email_address} title="Email Address" type="email" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.phone_number} title="Phone Number" type="number" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.zip_code} title="Zip code" type="number" />
                  <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} onChange={handleInput} value={inputForm.id_card} title="ID Card" type="file" />
                  <input className="submit" type="submit" value="Update" />
                </form>
                
            </main>
        </section>
    )
}