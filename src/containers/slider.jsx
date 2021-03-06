import React, { Component } from 'react';
import Box from '../components/box';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setBoxes } from '../actions';

class Slider extends Component{

  handleLeftClick = () =>{
    document.getElementById("scroll").scroll({
     left:-900,
     behavior:'smooth'
   })
  }
  handleRightClick = () =>{
   document.getElementById("scroll").scroll({
     left:900,
     behavior:'smooth'
   })
  }


  componentWillMount() {
    // debugger
    this.props.setBoxes()

  }


  render(){
    const limit = this.props.boxes.length;
    return(
      <div className="sl-container">
        <div className="row sl-tab">
          <div className="col-sm-6 tab right active">Available Items</div>
          <div className="col-sm-6 tab left">Information One</div>
        </div>
        <div className="slider">
          <div id="scroll" className="scrollable">


            <div className="slide-left" onClick={this.handleLeftClick}>
              <div className="arrow-holder-l"></div>
              <div className="arrow-l"></div>
            </div>
            <div className="slide-right" onClick={this.handleRightClick}>
              <div className="arrow-holder-r"></div>
              <div className="arrow-r"></div>
            </div>
            { this.props.boxes.slice(limit - 6).map((box) => <Box box={box} key={box.id} />)}
          </div>
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
