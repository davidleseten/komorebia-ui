import React, {Component} from 'react';
import ActivityList from './ActivityList.js';
import CreateActivity from './CreateActivity.js';

class Body extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <CreateActivity addactivity={this.props.addactivity} />
        <h2>Spotlight Activities</h2>
        <ActivityList activities={this.props.activities} addmyactivity={this.props.addmyactivity} users={this.props.users} />
        <h2>My Created Activities</h2>
        <ActivityList activities={this.props.myactivities} addmyactivity={this.props.addmyactivity} users={this.props.users} />
      </div>
    )
  }
}

export default Body;
