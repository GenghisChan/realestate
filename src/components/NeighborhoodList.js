import React from 'react';
import neighborhoodData from '../data/neighborhood_data'
import NeighborhoodCard from './NeighborhoodCard'
import '../styles/NeighborhoodList.css'
import wtc from '../img/wtc.jpg'

const styles = {
  hero: {
    backgroundImage: `url(${wtc})`
  }
};

const NeighborhoodList = () => {

  const cards = neighborhoodData.map(neighborhood => <NeighborhoodCard data={neighborhood}/>)

    return(
      <div className="row">
        <div className="neighborhoodHero" style={styles.hero}></div>
        {cards}
      </div>
    )
  }


export default NeighborhoodList;
