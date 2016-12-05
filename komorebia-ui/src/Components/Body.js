import React, {Component} from 'react';
import ActivityList from './ActivityList.js';

class Body extends Component{
  constructor(props){
    super(props);
    console.log(this.props.activities);
  }

  render(){
    return(
      <div>
        <h3>Current Activitities</h3>
        <ActivityList activities={this.props.activities} />
      </div>
    )
  }
}

export default Body;