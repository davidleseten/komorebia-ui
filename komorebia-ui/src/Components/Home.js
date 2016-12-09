import React, {Component} from 'react';
import Body from './Body.js';
import Header from './Header.js';

class Home extends Component{
  constructor(props){
    super(props);
    //console.log(this.props.myActivities);
  }

  render(){
    return(
      <div>
        <Header current={this.props.current} addactivity={this.props.addactivity} />
        <Body activities={this.props.activities} myCreatedActivities={this.props.myCreatedActivities} myActivities={this.props.myActivities} users={this.props.users} addmyactivity={this.props.addmyactivity} />
      </div>
    )
  }
}

export default Home;
