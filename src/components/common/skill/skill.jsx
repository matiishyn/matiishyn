import React from "react"
import "./skill.styles.scss"

export const Skill = ({ title, level, experience, maxLevel, levelLabel }) => {
  const yearsExperience = Array.isArray(experience) ? experience.length : experience;
  return (
    <div className="skill">
      <h5 className="skill-title">{title}</h5>
      {yearsExperience && (
        <span className="skill-experience">
        {yearsExperience} {yearsExperience > 1 ? "years" : "year"}
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
}