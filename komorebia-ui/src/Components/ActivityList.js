import React, {Component} from 'react';
import ActivityListItem from './ActivityListItem.js';

class ActivityList extends Component{
  constructor(props){
    super(props);
    console.log(this.props.activities);
  }
  render(){
    return(
      <div>
        <h2>Activity List</h2>
        {this.props.activities.map((activity, index) => <ActivityListItem activity={activity} key={index} />)}
        {/* {this.props.activities.map((activity, index) => <p key={index}>{activity.title}</p>)} */}
      </div>
    )
  }
}

export default ActivityList;
