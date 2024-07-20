import React from "react";
import styles from "./Header.module.scss";
import logo from "./img/logo.svg";
import personal from "./img/personal.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to="/" state={{ fromLocation: true }}>
            <img src={logo} alt="Logo" />
            <h1>Movies</h1>
          </Link>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link to="/" state={{ fromLocation: true }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/actors">Actors</Link>
            </li>
            <li>
              <Link to="/registration">Register</Link>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <Link to="/account">
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
