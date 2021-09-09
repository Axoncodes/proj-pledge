import { account } from "./accountController";
import axios from "axios";

const createPledge = async (amount, interest_rate, term, monthly_payment, repayment_source, message) => {
    
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    const auth = await account.authorised();
    myHeaders.append("X-CSRFToken", auth.csrf)
  
    var raw = JSON.stringify({
        "amount": amount,
        "interest_rate": interest_rate,
        "term": term,
        "monthly_payment": monthly_payment,
        "repayment_source": repayment_source,
        "message": message,
    });
  
    let req = new Request(
      'https://papp.rastava.com/pledge/CreateEditPledge/', 
      {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        body: raw,
        headers: myHeaders
      }
    );
    
    const response = await fetch(req)
    const json = await response.json();
    return {
      json: json.data,
      status: json.status,
      message: json.message
    };
  
  }
  
  const CreateFamilyMember = async (first_name, last_name, profile_photo, phone_number, email, relation) => {

  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  const auth = await account.authorised();
  myHeaders.append("X-CSRFToken", auth.csrf)
 
    const image = {
      "profile_photo": profile_photo,
    }
    const data = {
        "first_name": first_name,
        "last_name": last_name,
        "phone_number": phone_number,
        "email": email,
        "relation": "",
    }
    var raw = ({
      image : profile_photo,
      data : data
    });

    

    console.log(raw)
    raw = JSON.stringify(raw)



    let req = new Request(
      'https://papp.rastava.com/pledge/CreateFamilyMember/', 
      {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        body: raw,
        headers: myHeaders
      }
    );

    console.log(req)

    const response = await fetch(req)
    const json = await response.json();
    return {
      json: json.data,
      status: json.status,
      message: json.message
    };
/*
        const auth = await account.authorised();
        console.log(auth)
        const config = {
            headers: { 'content-type': 'multipart/form-data' , "X-CSRFToken" :auth.csrf }
        }
        axios.post('https://papp.rastava.com/pledge/CreateFamilyMember/',inputForm,config)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            console.log(error.data);
        });
*/

  }

  export const pledge = {
    createPledge,CreateFamilyMember
  }