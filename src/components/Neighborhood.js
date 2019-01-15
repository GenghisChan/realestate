import React, { Component } from 'react'
import '../styles/Neighborhood.css'
import manhattan from '../img/manhattan.jpg'

class Neighborhood extends Component {

  constructor(){
  super()
  this.state = {
      img: manhattan
    }
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <h2 className="green-text">Manhattan</h2>
            <img src={this.state.img} />
          </div>
          <div className="col s12 l6">
            <h2 className="green-text">Boroughs</h2>
            <ul className="boroughs green-text">
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Neighborhood
