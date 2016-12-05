import React, {Component} from 'react';
import '../CSS/Header.css';
import Logo from './Logo.js';
import LoginHeader from './LoginHeader.js';

class Header extends Component{
  render(){
    return(
      <header>
        <Logo />
        <LoginHeader />
      </header>
    )
  }
}

export default Header;
