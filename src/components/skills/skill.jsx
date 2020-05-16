import React from "react"
import "./skill.styles.scss"

const MAX_LEVEL = 4

export const Skill = ({ title, level, experience }) => (
  <div className="skill">
    <h5 className="skill-title">{title}</h5>
    <span className="skill-experience">{experience} years</span>

    <div className="skill-bar">
      <div
        className="skill-bar-level"
        style={{ width: `${(level * 100) / MAX_LEVEL - 3}%` }}
      />
      {/*{level}*/}
    </div>
  </div>
)
