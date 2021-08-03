import Cookies from 'js-cookie';

const currentUserSubject = Cookies.get('sessionid');

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() { return currentUserSubject.value },
};



const login = (email, pass) => {

  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": email,
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

  fetch(req);

}


function logout() {

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

  fetch(req);

}
