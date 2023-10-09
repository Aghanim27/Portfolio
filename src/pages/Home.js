import React from "react";
import { Mail, GitHub, LinkedIn } from "@mui/icons-material";
// import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import "../styles/Home.css";
import SkillLists from "../helper/SkillLists";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, I am Kaung Htet Oo.</h2>
        <div className="prompt">
          <p> I am a Junior React Developer. </p>
          <a href="mailto:khotheagh27798@gmail.com">
            <Mail />
          </a>
          <a href="https://github.com/Aghanim27">
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/kaung-htet-62092b293/">
            <LinkedIn />
          </a>
        </div>
        <a href="https://drive.google.com/file/d/1HTeKNtWD4D4ljBqihptMtwyLTPTRqMy3/view?usp=sharing">
          <button className="resumeDownloadBtn">Download My Resume!</button>
        </a>
      </div>
      <SkillLists />
    </div>
  );
}

export default Home;
