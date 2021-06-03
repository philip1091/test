import React, { Component } from 'react';
import Box from '../components/box';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setBoxes } from '../actions';

class Slider extends Component{


  componentWillMount() {
    // debugger
    this.props.setBoxes()
  }


  render(){
    return(
      <div className="sl-container">
        <div className="row sl-tab">
          <div className="col-sm-6 tab right active">Available Items</div>
          <div className="col-sm-6 tab left">Information One</div>
        </div>
        <div className="slider">
          <div className="slide-left">
            <div className="arrow-holder-l"></div>
            <div className="arrow-l"></div>
          </div>
          <div className="slide-right">
            <div className="arrow-holder-r"></div>
            <div className="arrow-r"></div>
          </div>
          {this.props.boxes.map((box) => <Box box={box} key={box.id} />)}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setBoxes: setBoxes },
    dispatch
    );
}

function mapStateToProps(state){
  return{
    boxes: state.boxes
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Slider);
