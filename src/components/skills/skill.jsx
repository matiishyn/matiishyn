import React from "react"
import "./skill.styles.scss"

export const Skill = ({ title, level, experience, maxLevel, levelLabel }) => (
  <div className="skill">
    <h5 className="skill-title">{title}</h5>
    {experience && (
      <span className="skill-experience">
        {experience} {experience > 1 ? "years" : "year"}
      </span>
    )}

    <span className="skill-level-label">{levelLabel[level]}</span>

    <div className="skill-bar">
      <div
        className="skill-bar-level"
        style={{ width: `${(level * 100) / maxLevel - 3}%` }}
      />
    </div>
  </div>
)
