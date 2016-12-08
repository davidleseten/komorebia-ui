import React, {Component} from 'react';
import ActivityListItem from './ActivityListItem.js';
import '../CSS/ActivityList.css'

class ActivityList extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='activity-list-container'>
        {this.props.activities.map((activity, index) => <ActivityListItem addmyactivity={this.props.addmyactivity} activity={activity} key={index} />)}
      </div>
    )
  }
}

export default ActivityList;
