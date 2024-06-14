import React from "react";

import styles from "./Home.module.scss";

import Header from "./Header/Header";

import Preview from "./Preview/Preview";

import Trending from "./Trending/Trending";

import TrendingFilm from "./Trending/TrendingFilm";
import LikeThis from "./LikeThis/LikeThis";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Preview />
      <TrendingFilm />
      {/* <LikeThis /> */}
    </div>
  );
};

export default Home;
