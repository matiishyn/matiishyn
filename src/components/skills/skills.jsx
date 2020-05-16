import React, { useState } from "react"
import "./styles.scss"
import { skills } from "./data"

export const Skills = () => {
  const [blockVisible, setBlockVisible] = useState(1)
  return (
    <div className="skills-component">
      <h1 className="section-header">my skills</h1>

      <div className="skills-wrapper">
        {skills.map(group => (
          <div className="group">{group.groupTitle}</div>
        ))}
      </div>
    </div>
  )
}
