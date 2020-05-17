import React from "react"
import "./styles.scss"

export const Chronology = ({ chronology }) => {
  return (
    <div className="chronology-wrapper">
      {chronology.map(item => (
        <div key={item.dates}>
          <span className="dates">{item.dates}</span>
          <h4 className="title">{item.title}</h4>
          <h4 className="company-name">
            @ {item.company} <span className="location">{item.location}</span>
          </h4>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </div>
  )
}
