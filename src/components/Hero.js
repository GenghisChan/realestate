import React from 'react';
import '../styles/Hero.css'
import Image from '../img/hero4.jpg'

const styles = {
  header: {
    backgroundImage: `url(${Image})`,
    opacity: .8
  }
};

const Hero = () => {
  return(
    <div className="container hero" style={styles.header}></div>
  )
}

export default Hero;
