import React from "react"
import "./styles.scss"
import { skills, languages, skillLevelLabel, langLevelLabel } from "./data"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { Skill } from "./skill"

// skills
const skillsTitles = skills.map(el => el.groupTitle)
const skillsGroups = skills.map(el => el.groupSkills)
const maxSkillLevel = Object.values(skillLevelLabel).length

// languages
const maxLangLevel = Object.values(langLevelLabel).length

export const Skills = () => {
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
                maxLevel={maxSkillLevel}
                levelLabel={skillLevelLabel}
              />
            ))}
          </TabPanel>
        ))}
      </Tabs>

      <h1 className="section-header">languages</h1>
      {languages.map(lang => (
        <Skill
          key={lang.title}
          title={lang.title}
          level={lang.level}
          maxLevel={maxLangLevel}
          levelLabel={langLevelLabel}
        />
      ))}
    </div>
  )
}
