import React from "react";
import { Mail, GitHub, LinkedIn } from "@mui/icons-material";
import "../styles/Home.css";
<<<<<<< HEAD
import ProgressBar from "../components/ProgressBar";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
=======
import SkillLists from "../helper/SkillLists";
>>>>>>> master

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, I am Kaung Htet Oo.</h2>
        <div className="prompt">
<<<<<<< HEAD
          <p> I am a Junior Front-End Developer. </p>
          <Mail />
          <GitHub />
          <LinkedIn />
        </div>
      </div>
      <div className="skills">
        <div className="item">
          <h2>Skills</h2>
          {/* <span>
            HTML, CSS, JavaScript, React, Node, Bootstrap, TailwindCSS,
            MaterialUI, Github
          </span> */}
          <div className="progressBarContainer">
            <FaHtml5
              style={{
                paddingTop: 10,
                paddingRight: 5,
                height: 40,
                width: 40,
              }}
            />
            <ProgressBar progress="75" height="30" progressText="HTML" />
          </div>
          <div className="progressBarContainer">
            <FaCss3Alt
              style={{
                paddingTop: 10,
                paddingRight: 5,
                height: 40,
                width: 40,
              }}
            />
            <ProgressBar progress="85" height="30" progressText="CSS" />
          </div>
          <div className="progressBarContainer">
            <FaBootstrap
              style={{
                paddingTop: 10,
                paddingRight: 5,
                height: 40,
                width: 40,
              }}
            />
            <ProgressBar progress="75" height="30" progressText="Bootstrap" />
          </div>
          <div className="progressBarContainer">
            <BiLogoTailwindCss
              style={{
                paddingTop: 10,
                paddingRight: 5,
                height: 40,
                width: 40,
              }}
            />
            <ProgressBar progress="50" height="30" progressText="TailwindCSS" />
          </div>
          {/* <div className="progressBarContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="32"
              viewBox="0 0 36 32"
              fill="none"
              class="css-1170n61"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                fill="#3e497a"
              ></path>
            </svg>
            <ProgressBar progress="75" height="30" progressText="MaterialUI" />
          </div> */}
          <div className="progressBarContainer">
            <FaReact
              style={{
                paddingTop: 10,
                paddingRight: 5,
                height: 40,
                width: 40,
              }}
            />
            <ProgressBar progress="75" height="30" progressText="React" />
          </div>
          <div className="progressBarContainer">
            <FaNodeJs
              style={{
                paddingTop: 10,
                paddingRight: 5,
                height: 40,
                width: 40,
              }}
            />
            <ProgressBar progress="35" height="30" progressText="Node" />
          </div>
          <div className="progressBarContainer">
            <FaGithub
              style={{
                paddingTop: 10,
                paddingRight: 5,
                height: 40,
                width: 40,
              }}
            />
            <ProgressBar progress="65" height="30" progressText="Github" />
          </div>
          {/* <ProgressBar progress="85" height="30" progressText="CSS" />
          <ProgressBar progress="75" height="30" progressText="Bootstrap" />
          <ProgressBar progress="50" height="30" progressText="TailwindCSS" />
          <ProgressBar progress="50" height="30" progressText="MaterialUI" />
          <ProgressBar progress="35" height="30" progressText="Node" />
          <ProgressBar progress="65" height="30" progressText="Github" /> */}
        </div>
      </div>
=======
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
      </div>
      <SkillLists />
>>>>>>> master
    </div>
  );
}

export default Home;
