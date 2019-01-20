import React, { Component } from 'react'
import '../styles/NeighborhoodList.css'
import paulus from '../img/manhattan.jpg'
import '../styles/NeighborhoodList.css'

class NeighborhoodCard extends Component {
  render(){

    return(
          <div className="col s12 m6 l4">
            <div className="card">
              <div className="card-image">
                <img src={paulus}/>
                <a href="#" className="card-title black-text">{this.props.data.name}</a>
              </div>
            </div>
          </div>
    )
  }
}

export default NeighborhoodCard;
