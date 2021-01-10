import React from "react";

import styles from "./Post.module.css";

const post = (props) => {
  return (
    <section className={styles.post}>
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      <p>{props.content}</p>
    </section>
  );
};

export default post;
