import React from "react";
import "./Progress.scss";
import { softSkills } from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import CodeAnimation from "../../assets/lottie/Teamwork";


export default function SoftSkills() {
  if (softSkills.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">

        <div className="skills-image">
            {softSkills.animated ? ( 
              <DisplayLottie animationData={CodeAnimation} />
            ) : (
              <img
                alt="Soft Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
          
          <div className="skills-bar">
            <h1 className="skills-heading">Soft Skills</h1>
            {softSkills.skills.map((skill, i) => { 
              const progressStyle = {
                width: skill.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{skill.Skill}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

         
        </div>
      </Fade>
    );
  }
  return null;
}