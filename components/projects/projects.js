import React from "react";
import Project from "./Project/Project";

import styles from "./Projects.module.css";

const projects = (props) => {
  return (
    <ul className={styles.projects}>
      {props.projects.map((project, index) => {
        return <Project key={index} title={project.title} id={project.id} />;
      })}
    </ul>
  );
};

export default projects;
