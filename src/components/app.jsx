import React, { Component } from 'react';
import ProductSummary from '../containers/product_summary';
import Slider from '../containers/slider';

class App extends Component{
  render(){
    return (
    <div id="app" className="app ">
      <ProductSummary />
      <Slider/>
    </div>
  );
  }
}

export default App;
