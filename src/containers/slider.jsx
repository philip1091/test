import React, { Component } from 'react';
import Box from '../components/box';

class Slider extends Component{

  static defaultProps = {
    boxes: [
      {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    ]
  }

  componentWillMount() {

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

export default Slider;
