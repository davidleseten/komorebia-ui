import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Components/Home.js';
import {Router, Route, hashHistory, Link, IndexLink} from 'react-router';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      spotlightActivities: [],
      myCreatedActivities: [],
      myActivities: [],
      appUsers: [],
      activitiesLoaded: false,
      currentUser: {},
      userLoaded: false
    }
    this._getActivities = this._getActivities.bind(this);
    this._loadActivities = this._loadActivities.bind(this);
    this._getUsers = this._getUsers.bind(this);
    this._checkUser = this._checkUser.bind(this);
    this._addUser = this._addUser.bind(this);
    this._fetchUser = this._fetchUser.bind(this);
  }
  componentWillMount(){
    this._getActivities();
    this._getUsers();
    this._checkUser();
  }
  _getActivities(){
    axios.get('https://komorebia-api.herokuapp.com/activities').then((response) =>{
      let newActivities = response.data;
      this.setState({spotlightActivities: newActivities, activitiesLoaded: true})
    })
  }
  _checkUser(){
    let currentSub = localStorage.getItem('sub');
    currentSub = currentSub.replace(/[|,]/g, "");
    let apiUrl = 'https://komorebia-api.herokuapp.com/appusers/'+currentSub;
    console.log(apiUrl);
    axios.get(apiUrl).then((response) =>{
      this._fetchUser(response.data);
    }).catch((error) => {
      this._addUser(currentSub);
    })
  }
  _getUsers(){
    // axios.get('https://komorebia-api.herokuapp.com/appusers').then((response) =>{
    //   let newUsers = response.data;
    //   this.setState({appUsers: newUsers})
    // })
  }

  _addUser(currentSub){
    let profileObject = JSON.parse(localStorage.getItem('profile'));
    let newUser = {
      loginId: currentSub,
      firstName: profileObject.given_name,
      lastName: profileObject.family_name,
      about: '',
      active: true,
      picture: profileObject.picture,
    }
    axios.post('https://komorebia-api.herokuapp.com/appusers', newUser).then((response) =>{
      console.log(response);
    }).catch((error) => {console.log(error);})
    this._fetchUser(currentSub);
  }
  _fetchUser(userObject){
    this.setState({
      currentUser: userObject,
      userLoaded: true
    })
  }
  _loadActivities(){
    if (this.state.activitiesLoaded === true && this.state.userLoaded === true){
      console.log(this.state.currentUser);
      return <Home activities={this.state.spotlightActivities} current={this.state.currentUser} />
    } else {
      return <h3>Loading Activities...</h3>
    }
  }
  // _addActivities(){
  //
  // }
  render() {
    let currentDisplay = this._loadActivities();
    return (
      <div>
        {currentDisplay}
      </div>
    );
  }
}

export default App;
