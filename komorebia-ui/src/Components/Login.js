import React, {Component} from 'react';
import AuthService from '../Utils/AuthService.js';
const auth = new AuthService('P5EDxUyc02sAmpwjQuOAlkrr9GXCgwrZ', 'spiders1999.auth0.com');
import {hashHistory} from 'react-router';
import '../CSS/Login.css';

class Login extends Component{
  constructor(props){
    super(props);

  }
  _logoutLink(){
    return (
      <a href="#" onClick={(e) => {
        e.preventDefault();
        auth.logout();
        hashHistory.push('/')
      }}>Log out</a>

    )
  }
  _loginLink(){
    return (
      <a href="#" onClick={(e) => {
        e.preventDefault();
        auth.login();
      }}>Log in</a>
    )
  }
  render(){
    //console.log(auth);
    var sessionLink;
    if (auth.loggedIn()){
      sessionLink = this._logoutLink();
    } else {
      sessionLink = this._loginLink();
    }
    return(
      <div className="login-page-container">
        <div className="session-link-container">
          <h1>Komorebia</h1>
          <p>{sessionLink}</p>

        </div>
      </div>

    )
  }
}

export default Login;
