import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Cookies from 'js-cookie';

import Me from './Me.js';
import Login from './login.js';
import Register from './register.js';
import Report from './Report.js';
import MakeReport from './makeReport.js';

import './App.css';


const apiUrl = 'http://localhost:3000';

function App() {
    const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
    const jwtAuth = (token) => {
        localStorage.setItem('token', token);
        setJwt(token);
    };
    const logout = () => {
        localStorage.removeItem('token');
        setJwt(null);
    };
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Me</Link>
          </li>
          <li>
          <Link to="/reports/week/1">kmom01</Link>
          </li>
          <li>
          <Link to="/reports/week/2">kmom02</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>

          {jwt ? (
              <li>
              <Link to="/report">reports</Link>
              </li>
            ) : (
                null
            )}
            <li>
          {jwt ? (
              <Link onClick={logout}>Logout</Link>

            ) : (
                <Link to="/login">login</Link>
            )}
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Me} />
      <Route
          path="/login"
          render={props => <Login {...props} jwtAuth={jwtAuth} />}
      />
      <Route exact path="/register" component={Register} />
      <Route path="/reports/week/:kmom" component={Report} />

        <Route
            path="/report"
            render={props => <MakeReport {...props} jwt={jwt} />}
        />
    </div>
  </Router>
);
}


export default App;
