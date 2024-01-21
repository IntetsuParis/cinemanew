import React from 'react';

import styles from './Home.module.scss';

import Header from './Header/Header';

import Preview from './Preview/Priview';

import Trending from './Trending/Trending';

import TrendingFilm from './Trending/TrendingFilm';



const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Preview />
    
      <TrendingFilm/>
    </div>
  );
};

export default Home;
