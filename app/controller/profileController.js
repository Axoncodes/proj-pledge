import { account } from "./accountController";

const viewProfile = async () => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  let req = new Request(
    'https://papp.rastava.com/users/ViewProfile/', 
    {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: myHeaders
    }
  );
  
  const response = await fetch(req)
  const json = await response.json();
  return json;
  
}


const editProfile = async (first_name, last_name, profile_photo, biography) => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  const auth = await account.authorised();
  myHeaders.append("X-CSRFToken", auth.csrf)

  var raw = JSON.stringify({
    'first_name': first_name,
    'last_name': last_name, 
    'biography': biography
  });

  let req = new Request(
    'https://papp.rastava.com/users/ProfileEdit/', 
    {
      mode: 'cors',
      credentials: 'include',
      method: 'PUT',
      headers: myHeaders,
      body: raw
    }
  );
  
  const response = await fetch(req)
  const json = await response.json();
  return json;
  
}


const viewAdditionalInformation = async () => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  let req = new Request(
    'https://papp.rastava.com/users/AdditionalInformation/', 
    {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: myHeaders,
    }
  );
  
  const response = await fetch(req)
  const json = await response.json();
  return json;
  
}


const editAdditionalInformation = async (date_of_birth, country, state, city, address_1, address_2, phone_number, id_card, zip_code) => {
  
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  const auth = await account.authorised();
  myHeaders.append("X-CSRFToken", auth.csrf)

  var raw = JSON.stringify({
    'birth_date':date_of_birth,
    'country':country,
    'state':state,
    'city':city,
    'address_1':address_1,
    'address_2':address_2,
    'phone_number':phone_number,
    // 'id_card':id_card,
    'zip_code':zip_code,
  });

  let req = new Request(
    'https://papp.rastava.com/users/AdditionalInformation/', 
    {
      mode: 'cors',
      credentials: 'include',
      method: 'PUT',
      headers: myHeaders,
      body: raw
    }
  );
  
  const response = await fetch(req)
  const json = await response.json();
  return json;
  
}


const countries = async () => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  let req = new Request(
    'https://papp.rastava.com/cities_light/api/countries', 
    {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: myHeaders,
    }
  );
  
  const response = await fetch(req)
  const json = await response.json();
  console.log(json.data[0].name);
  var names = [];
  await json.data.forEach((item, index)=>{
    names.push(item.name)
  })
  return {
    names:names
  };
  
}


const states = async () => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  let req = new Request(
    'https://papp.rastava.com/cities_light/api/regions', 
    {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: myHeaders,
    }
  );
  
  const response = await fetch(req)
  const json = await response.json();
  console.log(json.data[0].name);
  var names = [];
  await json.data.forEach((item, index)=>{
    names.push(item.name)
  })
  return {
    names:names
  };
  
}






  export const profileInfo = {
    viewProfile,
    editProfile,
    viewAdditionalInformation,
    editAdditionalInformation,
    countries,
    states,
  }