import React, {Component} from 'react';
import '../CSS/ActivityListItem.css';

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
      <div className="activity-item-container">
        <img src={this.props.activity.picture} alt={this.props.activity.title} />
        <div className="activity-item-content">
          <h3>{this.props.activity.title}</h3>
          <p className="activity-headline">{this.props.activity.headline}</p>
          <p><a href="#" onClick={this._handleAdd}>Join this activity</a></p>
        </div>

      </div>
    )
  }
}

export default ActivityListItem;
