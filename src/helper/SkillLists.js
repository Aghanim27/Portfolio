import React from "react";
import ProgressBar from "../components/ProgressBar";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

function SkillLists() {
  return (
    <div className="skills">
      <div className="item">
        <h2>Skills</h2>
        <div className="progressBarContainer">
          <FaHtml5
            style={{
              paddingTop: 10,
              paddingRight: 5,
              height: 40,
              width: 40,
            }}
          />
          <ProgressBar progress="85" height="30" progressText="HTML" />
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
        <div className="progressBarContainer">
          <FaReact
            style={{
              paddingTop: 10,
              paddingRight: 5,
              height: 40,
              width: 40,
            }}
          />
          <ProgressBar progress="83" height="30" progressText="React" />
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
          <SiExpress
            style={{
              paddingTop: 10,
              paddingRight: 5,
              height: 40,
              width: 40,
            }}
          />
          <ProgressBar progress="40" height="30" progressText="Express" />
        </div>

        <div className="progressBarContainer">
          <BiLogoMongodb
            style={{
              paddingTop: 10,
              paddingRight: 5,
              height: 40,
              width: 40,
            }}
          />
          <ProgressBar progress="25" height="30" progressText="MongoDB" />
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
  );
}

export default SkillLists;
