import React, { useState } from "react"
import "./styles.scss"
import { skills } from "./data"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { Skill } from "./skill"

const skillsTitles = skills.map(el => el.groupTitle)
const skillsGroups = skills.map(el => el.groupSkills)

export const Skills = () => {
  const [blockVisible, setBlockVisible] = useState(1)
  return (
    <div className="skills-component">
      <h1 className="section-header">my skills</h1>

      <Tabs className="skills-tabs">
        <TabList>
          {skillsTitles.map(title => (
            <Tab key={title}>{title}</Tab>
          ))}
        </TabList>

        {skillsGroups.map((group, ind) => (
          <TabPanel key={ind}>
            {group.map(skill => (
              <Skill
                key={skill.title}
                title={skill.title}
                experience={skill.experience}
                level={skill.level}
              />
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  )
}
