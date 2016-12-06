import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Login from './Components/Login.js'
import NoContent from './Components/NoContent.js'
import './index.css';
import AuthService from './Utils/AuthService.js';
const auth = new AuthService('P5EDxUyc02sAmpwjQuOAlkrr9GXCgwrZ', 'spiders1999.auth0.com');
import {Router, Route, hashHistory, Link, IndexLink, IndexRoute} from 'react-router';

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()){
    replace({
      pathname: '/'
    })
  }
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" auth={auth}>
      <IndexRoute component={Login} />
      <Route path="/home" component={App} onEnter={requireAuth} />
      <Route path="*" component={NoContent}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
