import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { account } from '../../../../../controller/accountController';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {



    // var myHeaders = new Headers();
    // myHeaders.append("accept", "application/json");
    // myHeaders.append("Content-Type", "application/json");

    // let req = new Request(
    //   'https://papp.rastava.com/api/auth/', 
    //   {
    //     mode: 'cors',
    //     credentials: 'include',
    //     method: 'POST',
    //     headers: myHeaders
    //   }
    // );
    
    // fetch (req)
    // .then(response=>response.json())
    // .then(result=>result.detail=="Verified"?true:false)
    // .then((res) => {
      
    //   console.log(res);
    //   // return res?
    //   //   <Component {...props} />
    //     return <Redirect to='/signin' />
  
    // })

    
    const xasd = async () => {
      var auth = false;
      auth = await account.authorised();
      if(auth) {
        console.log(auth)
        return <Component {...props} />
      }
      return <Redirect to='/signin' />
    }
    // xasd()
    xasd()
    

  }}/>
);