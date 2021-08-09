import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// views
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';
import ForgotPass from './views/ForgotPass';
import PasswordReset from './views/PasswordReset';

// component
// import { PrivateRoute } from './components/routes/privateRoute/PrivateRoute';

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
  // account.login("letschool10@gmail.com", "stringdasdasd")

  /**
   * @mode (fullsize, wide)
   * The @fullsize basically contains sidebar and main page (like home or payment, ...)
   * The @wide is like popup but no sidebar included
   */

  return(
    <section id="sectionroot">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/password-recovery" component={ForgotPass} />
          <Route path="/verify-password/:uid/:token" component={PasswordReset}/>
        </Switch>
      </Router>
    </section>
  )
}