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
        <ActivityList activities={this.props.activities} users={this.props.users} />
      </div>
    )
  }
}

export default Body;
