import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.skillName}
              >
                {skill.src ? (
                  <img
                    src={skill.src}
                    alt={skill.skillName}
                    className="skill-icon"
                    onMouseEnter={e => skill.hoverimg && (e.currentTarget.src = skill.hoverimg)}
                    onMouseLeave={e => skill.hoverimg && (e.currentTarget.src = skill.src)}
                  />
                ) : (
                  <i className={skill.fontAwesomeClassname}></i>
                )}
                <p>{skill.skillName}</p>
              </li>

            );
          })}
        </ul>
      </div>
    </div>
  );
}
