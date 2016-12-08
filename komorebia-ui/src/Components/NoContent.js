import React, {Component} from 'react';
import '../CSS/NoContent.css'

class NoContent extends Component{
  render(){
    return(
      <div className="nocontent-page-container">
        <div className="nocontent-link-container">
          <h2>The content you are looking for was not found.</h2>
          <p><a href="/#/home">Return home</a></p>
        </div>
      </div>

    )
  }
}
export default NoContent;
