import React, { Component } from 'react'

class Contact extends Component {
  render(){
    return(
      <section className="section container" id="contact">
        <h4 className="center">CONTACT US</h4>
        <div className="row">
          <div className="col s12 l5">
            <h5 className="indigo-text text-darken-4">TO CONTACT OUR RENTAL OR SALES TEAM PLEASE CALL OR EMAIL US:</h5>
              <div className="row">
              <div className="col s12 l6">
              <p>277 Grand Street</p>
              <p>Jersey City, NJ</p>
              <p>Tel: 123-456-7890</p>
              </div>
              <div className="col l6">
              <p>Email: info@mysite.com</p>
              <p>Fax: 123-456-7890</p>
              <p>Add Google Map here</p>
              </div>
            </div>
          </div>
          <div className="col s12 l5 offset-l2">
            <form>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input type="email" id="email"/>
                <label for="email">Email</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">message</i>
                <textarea id="message" className="materialize-textarea"></textarea>
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
