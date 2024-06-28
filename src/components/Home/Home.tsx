import React from "react";

import styles from "./Home.module.scss";

import Header from "../Header/Header";

import Preview from "../Preview/Preview";

import Trending from "../Trending/Trending";

import TrendingFilm from "../Trending/TrendingFilm";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Preview />
      <TrendingFilm />
    </div>
  );
};

export default Home;
