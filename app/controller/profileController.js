const profileInfo = async () => {
  
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
  
    let req = new Request(
      'https://papp.rastava.com/users/user/', 
      {
        mode: 'cors',
        credentials: 'include',
        method: 'GET',
        headers: myHeaders
      }
    );
    
    const response = await fetch(req)
    const json = await response.json();
    const auth = json.data.detail=="Verified"?true:false
    console.log(auth);
    // return auth;
  
   
  
  }