import React from "react";
import Link from "next/link";

import styles from "./project.module.css";

const project = (props) => {
  return (
    <section className={styles.post}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.imgWrapper}>
        <a href={props.link}>
          <div className={styles.dim}>
          <img className={styles.img} src={props.img} alt={props.title}></img>
          </div>
        </a>
      </div>
      <div className={styles.subtitle}>
        <a href={props.readme}>
          <small>Read more</small>
        </a>
      </div>
    </section>
  );
};

export default project;
