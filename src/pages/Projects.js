import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectLists } from "../helper/ProjectLists";

import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projectList">
        {ProjectLists.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
