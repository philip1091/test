import React, { Component } from 'react';

class ProductSummary extends Component{
  render(){
    return(
      <div className="sum-container">
        <div className="pr-sum">
          <div className="sum">
            <div className="logo">
              <p className="text-logo">T</p>
            </div>
            <div className="menu">
              <div className="menu-icon">
                <div className="line top"></div>
                <div className="line bottom"></div>
              </div>
              <p className="menu-item">Login</p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 details">
                <div className="part ">
                  <span className="title light"> Product Items Summary</span>
                </div>
                <div className="part">
                  <span className="title orange"> Deposited</span><br></br>
                  <span className="money">$2500</span>
                </div>
                <div className="part">
                  <span className="title red"> Withdrawn</span><br></br>
                  <span className="money">$700</span>
                </div>
              </div>
              <div className="col-sm-6 ">
              <div className="graph">
                <div className=" outer">
                  <div className=" inner"></div>
                </div>

              </div>
              </div>
            </div>
          </div>


        </div>
        <p className="mid-text">Lorem ipsum dummy text. Lorem isum not just dummy text</p>
      </div>
    )
  }
}

export default ProductSummary;
