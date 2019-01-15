import React from 'react';
import { Button, Parallax } from 'react-materialize';
import '../styles/Home.css';
import apartment2 from '../img/apartment2.jpg'
import apartment from '../img/apartment.jpg'
import parallax1 from '../img/clouds.jpg'
import parallax2 from '../img/grass.jpg'
import Hero from './Hero'

// const styles = {
//   header: {
//     backgroundImage: `url(${Image})`,
//     opacity: .8
//   }
// };

const Home = () => {
  return(
    <div>
        <Hero/>
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

      <section className="section container" id="contact">
        <h4 className="center">CONTACT US</h4>
        <div className="row">
          <div className="col s12 l5">
            <h2 className="indigo-text text-darken-4">Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>
          <div className="col s12 l5 offset-l2">
            <form>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input type="email" id="email" placeholder="example@gmail.com"/>
                <label for="email">Email</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">message</i>
                <textarea id="message" className="materialize-textarea" placeholder="I would love to hear more about .."></textarea>
                <label for="message">Your Message</label>
              </div>

              <div className="input-field">
                <input type="text" id="date" className="datepicker"/>
                <label for="date">Date</label>
              </div>

              <div className="input-field">
                <p>
                  <label>
                  <input type="checkbox"/>
                    <span>Information</span>
                  </label>
                </p>
                <p>
                  <label>
                  <input type="checkbox"/>
                    <span>Tour</span>
                  </label>
                </p>
              </div>

              <div className="input-field center">
                <button className="btn">Submit</button>
              </div>
            </form>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;
