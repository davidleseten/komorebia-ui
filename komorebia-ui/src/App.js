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
      currentUser: {}
    }
    this._getActivities = this._getActivities.bind(this);
    this._loadActivities = this._loadActivities.bind(this);
    this._getUsers = this._getUsers.bind(this);
    this._checkUser = this._checkUser.bind(this);

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
  _getUsers(){
    axios.get('https://komorebia-api.herokuapp.com/appusers').then((response) =>{
      let newUsers = response.data;
      this.setState({appUsers: newUsers})
    })
  }
  _checkUser(){
    let profileObject = localStorage.getItem('profile');
    this.setState({
      currentUser: profileObject
    })
  }
  _loadActivities(){
    if (this.state.activitiesLoaded === true){
      return <Home activities={this.state.spotlightActivities} users={this.state.appUsers} current={this.state.currentUser} />
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
      <div className="App">
        {currentDisplay}
      </div>
    );
  }
}

export default App;
