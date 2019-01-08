import React, { Component } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Listing from './components/Listing'
import Neighborhood from './components/Neighborhood'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listing" component={Listing} />
            <Route exact path="/neighborhoods" component={Neighborhood} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
