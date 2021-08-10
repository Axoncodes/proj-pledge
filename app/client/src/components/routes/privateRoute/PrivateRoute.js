import React, {useState, useEffect} from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';
import { account } from '../../../../../controller/accountController';

const test = ({props, Component}) => { 

  // const sasho = async () => {
  //   console.log("sassho");
  //   // return await account.authorised()
  // }
  <Component {...props} />
  // sasho()
  // auth ? (
  //   <Component {...props} />
  //   ) : <Redirect to="/signin" />

} 

export const PrivateRoute = ({ component: Component, ...rest }) => (
  
    <Route 
      {...rest} 
      render={test}
    />
);










