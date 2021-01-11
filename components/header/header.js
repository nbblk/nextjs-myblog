import React from "react";
import Link from "next/link";

import styles from "./Header.module.css";

const header = (props) => {
  return (
    <header className={styles.header}>
      <title>Blake Sim - Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
        <Link href="/" className={styles.title}>
          <p>{props.title}</p>
        </Link>
    </header>
  );
};

export default header;
