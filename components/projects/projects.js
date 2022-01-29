import React from "react";
import Project from "./project/project";

import styles from "./projects.module.css";

const projects = (props) => {
  return (
    <ul className={styles.projects}>
      {props.projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            id={project.id}
            img={project.img}
            link={project.link}
            readme={project.readme}
          />
        );
      })}
    </ul>
  );
};

export default projects;
