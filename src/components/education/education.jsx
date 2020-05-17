import React from "react"
import "../common/chronology/styles.scss"
import { education } from "./data"
import { Chronology } from "../common/chronology/chronology"

export const Education = () => {
  return (
    <div className="experience-component">
      <h1 className="section-header">education</h1>
      <Chronology chronology={education} />
    </div>
  )
}
