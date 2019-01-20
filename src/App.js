import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Listing from './components/Listing'
import NeighborhoodList from './components/NeighborhoodList'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listing" component={Listing} />
            <Route exact path="/neighborhoods" component={NeighborhoodList} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
