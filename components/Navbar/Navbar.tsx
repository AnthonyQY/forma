import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__left}>
          <h1 className={styles.navbar__left__title}>Your Blog Title</h1>
        </div>
        <div className={styles.navbar__right}>
          <button className={styles.menu__button}>
            <FontAwesomeIcon
              className={styles.menu__button__icon}
              icon={faBars}
            />
          </button>
          <ul className={styles.navbar__right__list}>
            <li className={styles.navbar__right__list__item}>
              <Link href="#">Blog</Link>
            </li>
            <li className={styles.navbar__right__list__item}>
              <Link href="#">Link 1</Link>
            </li>
            <li className={styles.navbar__right__list__item}>
              <Link href="#">Link 2</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

/*

*/
