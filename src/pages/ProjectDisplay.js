import React from "react";
import { useParams } from "react-router-dom";
import { ProjectLists } from "../helper/ProjectLists";
import { GitHub } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link"
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectLists[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Description:</b> {project.skills}
      </p>
      {/* <LinkIcon onClick={() => window.open(project.url)} /> */}
      <button 
  onClick={() => window.open(project.url)} 
  style={{ display: "flex", alignItems: "center", gap: "6px", border: "none", background: "none", color: "#1976d2", cursor: "pointer" }}
>
  <LinkIcon />
  <span><h4>Open Project</h4></span>
</button>

    </div>
  );
}

export default ProjectDisplay;
