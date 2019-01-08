import React from 'react';
import { Button, Parallax } from 'react-materialize';
import '../styles/Home.css';
import apartment2 from '../img/apartment2.jpg'
import apartment from '../img/apartment.jpg'
import parallax1 from '../img/clouds.jpg'
import parallax2 from '../img/grass.jpg'

const Home = () => {
  return(
    <div>
      <section className="container section" id="photos">
        <h1 className="green-text center featured">Featured Listings</h1>
        <div className="row">
          <div className="col s12 l6 push-l6">
            <img src={apartment} alt="apartment" className="responsive-img materialboxed apartment1"/>
          </div>
          <div className="col s12 l5 offset-l1 pull-l7">
            <h2 className="green-text">255 Grove st.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l6">
            <img src={apartment2} alt="apartment-2" className="responsive-img materialboxed apartment2"/>
          </div>
          <div className="col s12 l5 offset-l1">
            <h2 className="green-text">255b baker st.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
          </div>
        </div>
      </section>

    
    </div>
  )
}

export default Home;
