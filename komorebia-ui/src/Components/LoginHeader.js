import React, {Component} from 'react';
import AuthService from '../Utils/AuthService.js';
const auth = new AuthService('P5EDxUyc02sAmpwjQuOAlkrr9GXCgwrZ', 'spiders1999.auth0.com');
import {Router, Route, hashHistory, Link, IndexLink} from 'react-router';
import '../CSS/LoginHeader.css';


class LoginHeader extends Component{
  _logoutLink(){
    return (
      <a href="#" onClick={(e) => {
        e.preventDefault();
        auth.logout();
        hashHistory.push('/');
      }}>Log out</a>

    )
  }
  _loginLink(){
    return (
      <a href="#" onClick={(e) => {
        e.preventDefault();
        auth.login();
        //hashHistory.push('/');
      }}>Log in</a>
    )
  }
  render(){
    var sessionLink;
    if (auth.loggedIn()){
      sessionLink = this._logoutLink();
    } else {
      sessionLink = this._loginLink();
    }
    return(
      <div className="login-header">{sessionLink}</div>
    )
  }
}

export default LoginHeader;
