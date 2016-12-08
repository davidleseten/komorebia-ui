import React, {Component} from 'react';

class ActivityListItem extends Component{
  constructor(props){
    super(props);
    this._handleAdd = this._handleAdd.bind(this);
  }
  _handleAdd(e){
    e.preventDefault();
    this.props.addmyactivity(this.props.activity._id, this.props.activity.participants);
  }
  render() {
    return (
      <div>
        <img src={this.props.activity.picture} alt={this.props.activity.title} />
        <h3>{this.props.activity.title}</h3>
        <p>{this.props.activity.headline}</p>
        <p><a href="#" onClick={this._handleAdd}>Join this activity</a></p>
      </div>
    )
  }
}

export default ActivityListItem;
