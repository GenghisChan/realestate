import React, { Component } from 'react'
import apartment2 from '../img/apartment2.jpg'
import apartment from '../img/apartment.jpg'

class Featured extends Component {
  render(){
    return(
      <div className="grey lighten-5">
      <section className="container section" id="photos">
      <h4 className="blue-text center featured">Featured Listings</h4>
        <div className="row">
          <div className="col s12 l6 push-l6">
            <img src={apartment} alt="apartment" className="responsive-img materialboxed apartment1 center"/>
          </div>

          <div className="col s12 l5 offset-l1 pull-l7">
            <h4 className="blue-text">Grove st.</h4>
            <h5>2 bedrooms</h5>
            <h4>$500,000</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <a className="waves-effect waves-light btn">See Details</a>
          </div>
      </div>
      <div className="row">
        <div className="col s12 l6">
          <img src={apartment2} alt="apartment-2" className="responsive-img materialboxed apartment2"/>
        </div>
        <div className="col s12 l5 offset-l1">
          <h4 className="blue-text">Baker st.</h4>
          <h5>3 bedrooms</h5>
          <h4>$500,000</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          <a className="waves-effect waves-light btn">See Details</a>
        </div>
      </div>

      </section>
      </div>

    )
  }
}

export default Featured
