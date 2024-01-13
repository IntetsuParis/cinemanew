import React from 'react';

import styles from './Home.module.scss';

import Header from './Header/Header';

import Preview from './Preview/Priview';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Preview />
    </div>
  );
};

export default Home;
