import React, {Component} from 'react';
import ActivityListItem from './ActivityListItem.js';

class ActivityList extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h2>Activity List</h2>
        {this.props.activities.map((activity, index) => <ActivityListItem activity={activity} key={index} />)}
      </div>
    )
  }
}

export default ActivityList;
