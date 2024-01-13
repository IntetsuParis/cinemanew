import React from 'react';

import styles from './Header.module.scss';

import logo from './img/logo.svg';



const Header = () => {
  return (
    <ul className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
          <h1>Movies</h1>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Genre</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
          </ul>
        </div>
      </div>
    </ul>
  );
};

export default Header;
