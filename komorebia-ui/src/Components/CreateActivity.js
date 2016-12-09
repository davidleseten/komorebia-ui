import React, {Component} from 'react';
import '../CSS/CreateActivity.css'

class CreateActivity extends Component{
  constructor(props){
    super(props);
    this.state = {
      divClass: 'create-activity-form hidden'
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._cancelForm = this._cancelForm.bind(this);
    this._openForm = this._openForm.bind(this);
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
    this._cancelForm(e);
  }
  _cancelForm(e){
    e.preventDefault();
    this.refs.title.value = "";
    this.refs.headline.value = "";
    this.refs.description.value = "";
    this.refs.image.value = "";
    this.setState({divClass: 'create-activity-form hidden'})
  }
  _openForm(e){
    e.preventDefault();
    this.setState({divClass: 'create-activity-form'})
  }
  render(){
    return(
      <div>
        <div className='create-hero-container'>
          <h1>Join a community making a better world one activity at a time!</h1>
          <p>
            <a href="#" className="" onClick={this._openForm}>Get Started! Create A New Activity</a>
          </p>
        </div>
        <div className={this.state.divClass}>
          <h2>Create A New Activity</h2>
          <form onSubmit={(event) => this._handleSubmit(event)}>
            <p>
              {/* <label>Title: </label> */}
              <input type="text" ref="title" className="create-input" placeholder="Title" />
            </p>
            <p>
              {/* <label>Headline: </label> */}
              <input type="text" ref="headline" className="create-input" placeholder="Headline" />
            </p>
            <p>
              {/* <label>Title: </label> */}
              <textarea ref="description" className="create-field" placeholder="Description"></textarea>
            </p>
            <p>
              {/* <label>Image: </label> */}
              <input type="text" ref="image" className="create-input" placeholder="Image" />
            </p>
            <p>
              <input type="submit" className="create-button" value="Create" />
              <input type="button" className="create-button" value="Cancel" onClick={this._cancelForm} />
            </p>
          </form>
        </div>
      </div>

    )
  }
}
export default CreateActivity;
