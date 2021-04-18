import React from 'react';
import Tracks from '../components/Tracks';
import Search from '../components/Search';

const Home = () => {
  return (
    <React.Fragment>
      <Search/>
      <Tracks/>
    </React.Fragment>
  )
}

export default Home;