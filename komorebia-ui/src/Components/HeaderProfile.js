import React, {Component} from 'react';

class HeaderProfile extends Component{
  render(){
    return(
      <div>
        <p><img src={this.props.current.picture} alt={this.props.current.given_name} className="profile-image"/> Welcome {this.props.current.firstName}!</p>
      </div>
    )
  }
}

export default HeaderProfile;
