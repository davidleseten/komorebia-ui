import React, {Component} from 'react';
import Body from './Body.js';
import Header from './Header.js';

class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Header />
        <Body activities={this.props.activities} />
      </div>
    )
  }
}

export default Home;
