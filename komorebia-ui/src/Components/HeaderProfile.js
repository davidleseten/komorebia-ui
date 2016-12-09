import React, {Component} from 'react';
import '../CSS/HeaderProfile.css'

class HeaderProfile extends Component{
  render(){
    return(
      <div className="profile-information">
        <div>
          <img src={this.props.current.picture} alt={this.props.current.given_name} className="profile-image"/>
        </div>
        <div>
          Welcome {this.props.current.firstName}!
        </div>

      </div>
    )
  }
}

export default HeaderProfile;
