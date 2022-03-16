import React from "react";

import styles from "./Posts.module.css";
import Link from "next/link";

const Posts = (props) => {
  return (
    <ul className={styles.posts}>
        {props.posts.map((post, index) => {
          return (
            <li key={index} className={styles.postLink}>
              <Link className={styles.title} href={"/posts/" + post.id}>
                <a>{post.title}</a>
              </Link>
              <span className={styles.date}>{post.date}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default Posts;
