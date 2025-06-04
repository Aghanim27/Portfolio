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
          <p> I am a Year 2 Diploma in Business Student at Temasek Polytechnic. </p>
          <a href="mailto:khotheagh27798@gmail.com">
            <Mail />
          </a>
          {/* <a href="https://github.com/Aghanim27">
            <GitHub />
          </a> */}
          <a href="https://www.linkedin.com/in/kaunghtetoo27/">
            <LinkedIn />
          </a>
        </div>
        <a href="https://drive.google.com/file/d/17qXGIHBSVBDDT5q1eOmjFG7vmiKHV6Rn/view?usp=share_link">
          <button className="resumeDownloadBtn">Download My Resume!</button>
        </a>
      </div>
      {/* <SkillLists /> */}
    </div>
  );
}

export default Home;
