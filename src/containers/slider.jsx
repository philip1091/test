import React, { Component } from 'react';

class Slider extends Component{
  render(){
    return(
      <div className="sl-container">
        <div className="row sl-tab">
          <div className="col-sm-6 tab right active">Available Items</div>
          <div className="col-sm-6 tab left">Information One</div>
        </div>
        <div className="slider">

        </div>

      </div>
    )
  }
}

export default Slider;
