import React, { Component } from 'react'

class Featured extends Component {
  render(){
    return(
      <section className="container section" id="photos">
      <h3 className="green-text center featured">Featured Listings</h3>
        <div className="row">
          <div className="col s12 l6 push-l6">
            <img src={apartment} alt="apartment" className="responsive-img materialboxed apartment1 center"/>
          </div>

          <div className="col s12 l5 offset-l1 pull-l7">
            <h2 className="green-text">Grove st.</h2>
            <h5>$500,000</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <a className="waves-effect waves-light btn">See Details</a>
          </div>
      </div>
      <div className="row">
        <div className="col s12 l6">
          <img src={apartment2} alt="apartment-2" className="responsive-img materialboxed apartment2"/>
        </div>
        <div className="col s12 l5 offset-l1">
          <h2 className="green-text">Baker st.</h2>
          <h5>$500,000</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          <a className="waves-effect waves-light btn">See Details</a>
        </div>
      </div>

      </section>

    )
  }
}

export default Featured
