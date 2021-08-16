import React, {useState, useEffect} from "react"
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

import Field from "../components/form/Field";
import ProfilePic from "../components/profilepic/ProfilePic";

export default function NewFriend() {

    const [formErr, setFormErr] = useState({});
    const [inputForm, setInputForm] = useState({
        email_address: "",
        password: ""
    });
    
    const [box, setBox] = useState(setBox)
    const boxStatus = () => setBox(!box)
    const onExit = () => setBox(false)


    const handleInput = event => {
        const {name, value} = event.target;
        setInputForm({
          ...inputForm,
          [name]: value
        })
    }

    
    const handleSubmit = async event => {
        event.preventDefault()        
    }

    return (
        <>
            <p onClick={boxStatus} id="addnewfriendBtn" className="highlight" style={{cursor: "pointer"}}>Add</p>
            <section id="addnewfriendModel" className={`boxModel ${box?'show':''}`} >
                <div className="inner">
                <Breadcrumb onExit={onExit} current="Add Friends & Family" altTitle="Add" exit={true} exitReq={true} exitMode="outer" />
                <form onSubmit={handleSubmit} style={{marginTop: "20px"}}>
                    <ProfilePic text="Upload profile image" style="noborder" />
                    <div className="card">
                        <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} hideTitle={true} title="First Name" type="string" />
                        <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} hideTitle={true} title="Last Name" type="string" />
                    </div>
                    <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} hideTitle={true} title="Phone Number" type="string" />
                    <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} hideTitle={true} title="Email Address" type="string" />
                    <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} handleInput={handleInput} value={inputForm} title="Last Name" type="select" options={['Father', 'Mother', 'Sibling', 'Grandparent', 'Friend']} />
                </form>
                </div>
            </section>
        </>
    )
}