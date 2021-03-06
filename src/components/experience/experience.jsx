import React from "react"
import "../common/chronology/styles.scss"
import { experience } from "./data"
import { Chronology } from "../common/chronology/chronology"

export const Experience = () => {
  return (
    <div className="experience-component">
      <h1 className="section-header">my experience</h1>
      <Chronology chronology={experience} />
    </div>
  )
}
