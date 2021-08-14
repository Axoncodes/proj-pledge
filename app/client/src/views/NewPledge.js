import React, {useState, useEffect} from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import Field from '../components/form/Field';
import Friends from '../components/friends/Friends';

export default function NewPledge() {

    const [formErr, setFormErr] = useState({});
    const [inputForm, setInputForm] = useState({
        email_address: "",
        password: ""
    });

    const handleInput = event => {
        const {name, value} = event.target;
        setInputForm({
          ...inputForm,
          [name]: value
        })
    }
    
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
          console.log(response.message);
          if(location.state){
            console.log(location.state.backto);
            history.push(location.state.backto)
          }else{
            history.push("/")
          }
        }
        
    }



	return(
		<section className="fullview" id="Home">
			<Sidebar />
			<main>
				<Header />
				<Breadcrumb backLink="/" current="New Pledge Proposal " />

                <section className="box">

                    <form className="boxshadow" onSubmit={handleSubmit} >
                      <Field tooltip="sasho" customClass="extrasize" prefix="$" valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} title="Amount" ty pe="number" />
                      <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} title="Interest Rate" type="email" />
                      <Field tooltip="sasho" valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} title="Term" type="email" />
                      <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} title="Monthly Payment" type="email" />
                      <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} icon="email.svg" title="Repayment Source" type="email" />
                      <Field valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} title="Message" type="email" />
                    </form>
                    
                    <section className="boxshadow">
                        <Friends />
                        <input className="submit" type="submit" value="Update my profile" />
                    </section>

                </section>
            </main>
		</section>
	)

}