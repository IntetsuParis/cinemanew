import React from 'react';

import styles from './Preview.module.scss';

import Button from '@mui/material/Button';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import Play from './img/play.svg';

import Spider from './img/spider.svg';

import Galaxy from './img/galaxy.svg';

import PlayTrailer from './img/PlayTrailer.svg';

const Priview = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>FIND MOVIES</h2>
          <h1>TV shows and more</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={styles.button}>
          <Button>
            <a href="#">
              <img src={Play} alt="" />
            </a>
            <span>Watch Tutorial</span>
          </Button>
        </div>
      </div>
      <div className={styles.photos}>
        <a href="#">
          <img className={styles.spider} src={Spider} alt="Spider" />
        </a>
      </div>
    </div>
  );
};

export default Priview;
