import React from "react"
import * as flags from "./flags"
import "./project.styles.scss"

export const Project = ({ project }) => {
  return (
    <div className="project">
      <h5 className="title">{project.title}</h5>
      <div className="customer-flag-wrapper">
        <img
          className="customer-flag"
          src={flags[project.customerFlag]}
          alt=""
        />
      </div>
      <div className="duration">{project.duration}</div>
      <h5 className="role">{project.role}</h5>
      <div className="techStack">
        {project.techStack.split(', ').map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </div>
  )
}
