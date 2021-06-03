import React, { Component } from 'react';


class Box extends Component{



  render(){


    const style={
      backgroundImage: ` url('${this.props.box.url}'`
    }

    return(
      <div className=" box" style={style}>
      </div>

    )
  }
}

export default Box;
