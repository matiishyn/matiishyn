import React from "react"
import "./styles.scss"
import { services } from "./data"

export const Services = () => {
  return (
    <div className="services-component">
      <div className="container">
        <h1 className="section-header">services</h1>

        <div className="services-wrapper">
          {services.map(service => (
            <div className="service" key={service.title}>
              <h4>{service.title}</h4>
              <div dangerouslySetInnerHTML={{ __html: service.description }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
