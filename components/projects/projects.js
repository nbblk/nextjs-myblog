import React from "react";
import Project from "./project/Project";

import styles from "./Projects.module.css";

const Projects = (props) => {
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
            description={project.description}
            technologies={project.technologies}
          />
        );
      })}
    </ul>
  );
};

export default Projects;
