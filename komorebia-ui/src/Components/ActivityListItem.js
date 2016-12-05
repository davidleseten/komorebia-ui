import React, {Component} from 'react';

class ActivityListItem extends Component{
  render() {
    return (
      <div>
        <img src={this.props.activity.picture} alt={this.props.activity.title} />
        <h3>{this.props.activity.title}</h3>
        <p>{this.props.activity.description}</p>
      </div>
    )
  }
}

export default ActivityListItem;
