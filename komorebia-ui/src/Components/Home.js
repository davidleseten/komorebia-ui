import React, {Component} from 'react';
import Body from './Body.js';
import Header from './Header.js';

class Home extends Component{
  constructor(props){
    super(props);
    //console.log(this.props.current);
  }

  render(){
    return(
      <div>
        <Header current={this.props.current} />
        <Body activities={this.props.activities} myactivities={this.props.myactivities} users={this.props.users} addactivity={this.props.addactivity} addmyactivity={this.props.addmyactivity} />
      </div>
    )
  }
}

export default Home;
