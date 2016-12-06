import React, {Component} from 'react';
import ActivityList from './ActivityList.js';

class Body extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        
        <ActivityList activities={this.props.activities} users={this.props.users} />
      </div>
    )
  }
}

export default Body;
