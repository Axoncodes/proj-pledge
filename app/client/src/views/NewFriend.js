import React, {useState, useEffect} from "react"
import axios from 'axios';
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

import Field from "../components/form/Field";
import ProfilePic from "../components/profilepic/ProfilePic";
import { pledge } from '../../../controller/pledgeController';
export default function NewFriend() {

    const [formErr, setFormErr] = useState({});
    const [inputFormPic, setinputFormPic] = useState({
        profile_photo:"",
    });
    const [inputForm, setInputForm] = useState({
        first_name:"",
        last_name:"",
        profile_photo:null,
        phone_number:"",
        email: "",
        relation: ""
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
        console.log(inputFormPic)
        const response = await pledge.CreateFamilyMember(
          inputForm["first_name"],
          inputForm["last_name"],
          inputFormPic["profile_photo"],
          inputForm["phone_number"],
          inputForm["email"],
          inputForm["relation"],
        )

        console.log("response", response);

        //console.log(inputForm)  

    }

    
    const handleFileChosen = (file) => {
        setinputFormPic({
          "profile_photo": file
        })
        
    };

    return (
        <>
            <button onClick={boxStatus} id="addnewfriendBtn" className="highlight" style={{cursor: "pointer",backgroundColor:"white",border:"none"}}>Add</button>
            <section id="addnewfriendModel" className={`boxModel ${box?'show':''}`} >
                <div className="inner">
                <Breadcrumb onExit={onExit} current="Add Friends & Family" altTitle="Add" exit={true} exitReq={true} exitMode="outer" />
                <form onSubmit={handleSubmit} style={{marginTop: "20px"}}>
                    <ProfilePic text="Upload profile image" style="noborder" />

                    <input type="file"
                        title="profile_photo"required={true} //onChange={handleInput}
                        onChange={e => handleFileChosen(e.target.files[0])}
                        accept="image/png, image/jpeg"/>

               
                    <div className="card">
                        <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} onChange={handleInput} value={inputForm.first_name} hideTitle={true} title="First Name" type="string" />
                        
                        <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} onChange={handleInput} value={inputForm.last_name} hideTitle={true} title="Last Name" type="string" />
                    </div>
                    <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} onChange={handleInput} value={inputForm.phone_number} hideTitle={true} title="Phone Number" type="string" />

                    <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} onChange={handleInput} value={inputForm.email} hideTitle={true} title="Email" type="string" />

                    <Field mode={true} nomargin={true} valid={formErr.non_field_errors?false:true} message={formErr.non_field_errors} required={true} onChange={handleInput} value={inputForm.relation} title="relation" type="select" options={['Father', 'Mother', 'Sibling', 'Grandparent', 'Friend']} />

                    <input onClick={handleSubmit} className="submit" type="submit" value="Create" />
                </form>
                </div>
            </section>
        </>
    )
}