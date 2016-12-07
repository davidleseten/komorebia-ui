import React, {Component} from 'react';
import '../CSS/CreateActivity.css'

class CreateActivity extends Component{
  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(e){
    e.preventDefault();
    let currentSub = localStorage.getItem('sub');
    currentSub = currentSub.replace(/[|,]/g, "");
    var currentDate = new Date().getTime();
    let newActivity = {
      title: this.refs.title.value,
      headline: this.refs.headline.value,
      description: this.refs.description.value,
      active: true,
      spotlight: true,
      picture: this.refs.image.value,
      creator: currentSub,
      dateCreated: currentDate
    }
    this.props.addactivity(newActivity);
    this.refs.title.value = "";
    this.refs.headline.value = "";
    this.refs.description.value = "";
    this.refs.image.value = "";
  }
  render(){
    return(
      <div>
        <div className="create-activity-container">
          <h1>Cows</h1>
        </div>
        <div>
          <form onSubmit={(event) => this._handleSubmit(event)}>
            <p>
              <label>Title: </label>
              <input type="text" ref="title" placeholder="Title" />
            </p>
            <p>
              <label>Headline: </label>
              <input type="text" ref="headline" placeholder="Headline" />
            </p>
            <p>
              <label>Title: </label>
              <textarea ref="description" placeholder="description"></textarea>
            </p>
            <p>
              <label>Image: </label>
              <input type="text" ref="image" placeholder="Image" />
            </p>
            <p>
              <input type="submit" value="Create" />
            </p>
          </form>
        </div>
      </div>

    )
  }
}
export default CreateActivity;
