import React from "react";

import styles from "./Header.module.scss";

import logo from "./img/logo.svg";
import personal from "./img/personal.svg";

import { Link } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  return (
    <ul className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link
            to={{
              pathname: "/",
              state: {
                fromLocation: true,
              },
            }}
          >
            <img src={logo} alt="Logo" />

            <h1>Movies</h1>
          </Link>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/",
                  state: {
                    fromLocation: true,
                  },
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link className to={`/explore`} state={{}}>
                <a href="#">Explore</a>
              </Link>
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
              <Link className to={`/account`} state={{}}>
                <img className={styles.account} src={personal} alt="account" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </ul>
  );
};

export default Header;
