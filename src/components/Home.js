import React from 'react';
import { Button, Parallax } from 'react-materialize';
import '../styles/Home.css';
import parallax1 from '../img/clouds.jpg'
import parallax2 from '../img/grass.jpg'
import Hero from './Hero'
import Featured from './Featured'
import Contact from './Contact'

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
        <Featured/>
        <Contact/>
    </div>
  )
}

export default Home;
