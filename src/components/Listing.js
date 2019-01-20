import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
});

const mapStyle = {
  height: '100%',
  width: '100%'
};

class Listing extends Component {

  render(){
    return(
      <div>
            <Map style="mapbox://styles/mapbox/streets-v9" containerStyle={mapStyle}/>

      </div>
    )
  }
}

export default Listing;
