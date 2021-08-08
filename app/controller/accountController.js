import 'regenerator-runtime/runtime'
import axios from 'axios';

const authorised = async () => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  let req = new Request(
    'https://papp.rastava.com/api/auth/', 
    {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: myHeaders
    }
  );
  
  const response = await fetch(req)
  const json = await response.json();
  return json.detail=="Verified"?true:false;
  // return {
  //   json: access,
  //   status: response.status
  // };

}



const login = async (user, pass) => {

  await logout();
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": user,
    "password": pass
  });

  let req = new Request(
    'https://papp.rastava.com/api/login/', 
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
    json: json,
    status: response.status
  };

}



const passwordReset = async (email) => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": email,
  });

  let req = new Request(
    'https://papp.rastava.com/api/password/reset/', 
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
    json: json,
    status: response.status
  };

}



const logout = async () => {

  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  let req = new Request(
    'https://papp.rastava.com/api/logout/', 
    {
      mode: 'cors',
      credentials: 'include',
      method: 'POST',
      headers: myHeaders
    }
  );

  const response = await fetch(req)
  const json = await response.json();
  return json;

}



const register = async (firstName, lastName, email, password1, password2) => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "first_name": firstName,
    "last_name": lastName,
    "email": email,
    "password1": password1,
    "password2": password2
  });

  let req = new Request(
    'https://papp.rastava.com/api/register/', 
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
  return json;

}



const currentUser = () => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");


  let req = new Request(
    'https://papp.rastava.com/api/user/', 
    {
      mode: 'cors',
      credentials: 'include',
      method: 'GET',
      headers: myHeaders
    }
  );
  
  fetch(req)
  .then(res=>res.json())
  .then(data=>console.log(data))

}



const googleLogin = async (accesstoken) => {
  let res = await axios.post(
    "https://papp.rastava.com/api/google/",
    {
      access_token: accesstoken,
      // code: "google"
    }
  );
  console.log("res", res);
  return await res.status;
};




const passwordVerify = async (password, passwordConfirm, uid, token) => {
  
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "new_password1": password,
    "new_password2": passwordConfirm,
    "uid": uid,
    "token": token,
  });

  let req = new Request(
    'https://papp.rastava.com/api/password/reset/confirm/', 
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
    json: json,
    status: response.status
  };
}





export const account = {
  authorised,
  login,
  logout,
  register,
  currentUser,
  passwordReset,
  passwordVerify,
  googleLogin,
}