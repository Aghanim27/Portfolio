import React from "react";
import { useParams } from "react-router-dom";
import { ProjectLists } from "../helper/ProjectLists";
import { GitHub } from "@mui/icons-material";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectLists[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHub onClick={() => window.open(project.url)} />
    </div>
  );
}

export default ProjectDisplay;
