import React from "react";

import styles from "../../../styles/project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const project = (props) => {
  return (
    <section className={styles.project}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.imgWrapper}>
        <a href={props.link} className={styles.dim}>
          TRY IT!
        </a>
        <img className={styles.img} src={props.img} alt={props.title}></img>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <ul className={styles.technologies}>
            {props.technologies.map((item, index) => (
              <li className={styles.technology} key={index}>
                {item}
              </li>
            ))}
          </ul>
          <a className={styles.github} href={props.github}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithub}
              color="black"
              width={20}
              height={20}
            />
          </a>
        </div>
        <p>{props.description}</p>
      </div>
    </section>
  );
};

export default project;
