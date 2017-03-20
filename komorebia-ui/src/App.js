import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Components/Home.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      spotlightActivities: [],
      myCreatedActivities: [],
      myActivities: [],
      myActivitiesLoaded: false,
      appUsers: [],
      activitiesLoaded: false,
      currentUser: '',
      userLoaded: false,
      myParticipatingLoaded: false
    }
    this._getActivities = this._getActivities.bind(this);
    this._getMyActivities = this._getMyActivities.bind(this);
    this._loadActivities = this._loadActivities.bind(this);
    this._getUsers = this._getUsers.bind(this);
    this._checkUser = this._checkUser.bind(this);
    this._addUser = this._addUser.bind(this);
    this._fetchUser = this._fetchUser.bind(this);
  }
  componentWillMount(){
    this._getActivities();
    this._getMyActivities();
    this._getMyParticipating();
    this._getUsers();
    this._checkUser();
  }
  _getActivities(){
    axios.get('https://komorebia-api.herokuapp.com/activities/spotlight').then((response) =>{
      let newActivities = response.data;
      this.setState({spotlightActivities: newActivities, activitiesLoaded: true})
    })
  }
  _getMyActivities(){
    let currentSub = localStorage.getItem('sub');
    currentSub = currentSub.replace(/[|,]/g, "");
    axios.get('https://komorebia-api.herokuapp.com/activities/user/' + currentSub).then((response) =>{
      let mynewactivities = response.data;
      //console.log(mynewactivities);
      this.setState({myCreatedActivities: mynewactivities, myActivitiesLoaded: true})
    }).catch((error) =>{console.log(error);})
  }
  _getMyParticipating(){
    let currentSub = localStorage.getItem('sub');
    currentSub = currentSub.replace(/[|,]/g, "");
    axios.get('https://komorebia-api.herokuapp.com/activities/participants/' + currentSub).then((response) =>{
      let mynewparticipating = response.data;
      //console.log(mynewparticipating);
      this.setState({myActivities: mynewparticipating, myParticipatingLoaded: true})
    }).catch((error) =>{console.log(error);})
  }
  _checkUser(){
    let currentSub = localStorage.getItem('sub');
    currentSub = currentSub.replace(/[|,]/g, "");
    let apiUrl = 'https://komorebia-api.herokuapp.com/appusers/'+currentSub;
    //console.log(apiUrl);
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
    var currentDate = new Date().getTime();
    let newUser = {
      loginId: currentSub,
      firstName: profileObject.given_name,
      lastName: profileObject.family_name,
      about: '',
      active: true,
      picture: profileObject.picture,
      dateCreated: currentDate
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
  _addActivity(newActivity){
    //console.log(newActivity);
    axios.post('https://komorebia-api.herokuapp.com/activities', newActivity).then((response) =>{
      console.log(response);
      this._getActivities();
      this._getMyActivities();
    }).catch((error) => {console.log(error);})
  }
  _addMyActivity(activityId, newparticipants){
    let currentSub = localStorage.getItem('sub');
    currentSub = currentSub.replace(/[|,]/g, "");
    newparticipants.push(currentSub);
    //console.log(newparticipants);
    let newMyActivity = {
      participants: newparticipants
    }
    //newMyActivity = JSON.stringify(newMyActivity);
    var apiUrl = 'https://komorebia-api.herokuapp.com/activities/' + activityId;
    //console.log(apiUrl);
    //console.log(newMyActivity);

    axios.put(apiUrl, newMyActivity, {contentType: 'application/json'}).then((response) =>{
      console.log(this);
      this._getMyParticipating();
    }).catch((error) => {console.log(error);})
  }
  _loadActivities(){
    if (this.state.activitiesLoaded === true && this.state.userLoaded === true && this.state.myActivitiesLoaded === true && this.state.myParticipatingLoaded === true){
      //console.log(this.state.currentUser);
      return <Home activities={this.state.spotlightActivities} addmyactivity={this._addMyActivity} myCreatedActivities={this.state.myCreatedActivities} myActivities={this.state.myActivities} addactivity={this._addActivity} current={this.state.currentUser} />
    } else {
      //console.log(this.state.myActivitiesLoaded);
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
