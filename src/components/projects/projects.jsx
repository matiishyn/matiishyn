import React from "react"
import "../common/chronology/styles.scss"
import { projects } from "./data"

export const Projects = () => {
  return (
    <div className="projects-component">
      <h1 className="section-header">my projects</h1>
      <div className="projects-wrapper">
        {projects.map(project => (
          <div className="project">
            {project.title}
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}
