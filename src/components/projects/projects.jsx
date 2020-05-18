import React from "react"
import { projects } from "./data"
import "./projects.styles.scss"
import { Project } from "./project"

export const Projects = () => {
  return (
    <div className="projects-component bg-dark">
      <div className="container">
        <h1 className="section-header">my projects</h1>
        <div className="projects-wrapper">
          {projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

/*
{
    title
    subTitle
    projectDescription
    customer
    duration
    role
    responsibilities
    team
    techStack
  },
* */
