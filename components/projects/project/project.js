import React from "react";
import Link from "next/link";

import styles from "./Project.module.css";

const project = (props) => {
  return (
    <section className={styles.post}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={props.src} alt="alt text"></img>
      </div>
      <div className={styles.subtitle}>
          <small>Read More</small>
        <Link href={"/projects/" + props.id}>
     
        <svg className={styles.arrow}>
          <line
            x1="0"
            y1="0"
            x2="15"
            y2="15"
            stroke="#000"
            strokeWidth="1"
            markerEnd="url(#arrowhead)"
          />
          <line
            x1="0"
            y1="15"
            x2="15"
            y2="15"
            stroke="#000"
            strokeWidth="1"
            markerEnd="url(#arrowhead)"
          />
          <line
            x1="15"
            y1="15"
            x2="0"
            y2="-500"
            stroke="#000"
            strokeWidth="1"
            markerEnd="url(#arrowhead)"
          />
        </svg>
        </Link>
      </div>
    </section>
  );
};

export default project;
