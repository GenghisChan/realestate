import React, { Component } from 'react'

class Contact extends Component {
  render(){
    return(
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
    )
  }
}

export default Contact
