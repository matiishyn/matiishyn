import React from "react"
import "./styles.scss"
import { experience } from "./data"

export const Experience = () => {
  return (
    <div className="experience-component">
      <h1 className="section-header">my experience</h1>

      <div className="experience-wrapper">
        {experience.map(item => (
          <div key={item.dates}>
            <span className="dates">{item.dates}</span>
            <h4 className="title">{item.title}</h4>
            <h4 className="company-name">
              @ {item.company} <span className="location">{item.location}</span>
            </h4>
            <div className="description" dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        ))}
      </div>
    </div>
  )
}
