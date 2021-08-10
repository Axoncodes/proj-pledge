import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// views
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';
import ForgotPass from './views/ForgotPass';
import PasswordReset from './views/PasswordReset';
import EditProfile from './views/EditProfile';

// component
import { PrivateRoute } from './components/routes/privateRoute/PrivateRoute';

// css
import './style.css';

/*
  This file:
  Here is the Router base of the application
    each route is defined in here.
  As for the routes, the VIEWS are showen in here.
*/

/*
  AUTH:
  In this step I implement the init auth,
    If the app doesn't validate the user as authorised,
    the user will be taken to login page(view).
*/
export default function App() {

  return(
    <section id="sectionroot">
      <Router>
        <Switch>

          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/password-recovery" component={ForgotPass} />
          <Route path="/verify-password/:uid/:token" component={PasswordReset}/>
          <Route path="/edit-profile" component={EditProfile}/>
        </Switch>
      </Router>
    </section>
  )
  
}