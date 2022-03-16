import React from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <title>Blake Sim</title>
      <link rel="icon" href="/favicon.ico" />
      <div className={styles.menus}>
      {props.menus.map((item, index) => (
        <Link key={index} href={item.path} className={styles.title}>
          <a>{item.title}</a>
        </Link>
      ))}
      </div>
    </header>
  );
};

export default Header;
