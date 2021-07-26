import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// views
import Register from './views/Register'
import Login from './views/Login'

// css
import './style.css'


export default function App() {
    return (
        <section id="sectionroot">
            <Router>
                <Switch>
                    <Route path="/signup">
                        <Register />
                    </Route>
                    <Route path="/signin">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </section>
    );
}