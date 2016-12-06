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
      activitiesLoaded: false
    }
    this._getActivities = this._getActivities.bind(this);
    this._loadActivities = this._loadActivities.bind(this);
    this._getActivities();
  }
  _getActivities(){
    axios.get('https://komorebia-api.herokuapp.com/activities').then((response) =>{
      let newActivities = response.data;
      this.setState({spotlightActivities: newActivities, activitiesLoaded: true})

    })
  }
  _loadActivities(){
    if (this.state.activitiesLoaded === true){
      return <Home activities={this.state.spotlightActivities} />
    } else {
      return <h3>Loading...</h3>
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
