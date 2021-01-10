import React from "react";
import styles from "./projects.module.css";
import Project from "../projects/project/project";

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
