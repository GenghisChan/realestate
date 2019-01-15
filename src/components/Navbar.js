import React from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

console.log(Image)


const Navbar = () => {
  return(
    <header className="navbar">
      <nav nav-wrapper className="transparent">
        <div className="container black-text">

          <a href="" className="brand-logo black-text darken-4">Donovan</a>
          <a href="" className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>

          </a>
          <ul className="right hide-on-med-and-down nav-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/availabilities">Availabilities</Link></li>
            <li><Link to="/neighborhoods">Neighborhoods</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>

          <ul className="sidenav grey lighten-2" id="mobile-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/availabilities">Availabilities</Link></li>
            <li><Link to="/neighborhoods">Neighborhoods</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
