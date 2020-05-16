const level = {
  novice: 1,
  competent: 2,
  proficient: 3,
  expert: 4,
}

export const skills = [
  {
    groupTitle: "front end",
    groupSkills: [
      {
        title: "HTML/CSS",
        level: level.expert,
        experience: 8,
      },
      {
        title: "SASS/SCSS, LESS",
        level: level.expert,
        experience: 6,
      },
      {
        title: "Bootstrap",
        level: level.expert,
        experience: 7,
      },
      {
        title: "JavaScript, ES6",
        level: level.expert,
        experience: 8,
      },
      {
        title: "React.js/Redux",
        level: level.expert,
        experience: 5,
      },
      {
        title: "Angular",
        level: level.competent,
        experience: 2,
      },
      {
        title: "Angular.js",
        level: level.expert,
        experience: 4,
      },
      {
        title: "Backbone.js",
        level: level.competent,
        experience: 2,
      },
      {
        title: "TypeScript",
        level: level.competent,
        experience: 3,
      },
      {
        title: "Webpack/Gulp",
        level: level.expert,
        experience: 5,
      },
    ],
  },
  {
    groupTitle: "back end",
    groupSkills: [
      {
        title: "Node.js",
        level: level.competent,
        experience: 4,
      },
      {
        title: "Express.js",
        level: level.competent,
        experience: 4,
      },
      {
        title: "Firebase DataBase",
        level: level.competent,
        experience: 3,
      },
      {
        title: "Firebase Functions",
        level: level.competent,
        experience: 3,
      },
      {
        title: "AWS Lambda",
        level: level.novice,
        experience: 1,
      },
      {
        title: "AWS Infrastructure",
        level: level.novice,
        experience: 1,
      },
    ],
  },
  {
    groupTitle: "leadership",
    groupSkills: [
      {
        title: "Team Lead",
        level: level.competent,
        experience: 4,
      },
      {
        title: "Agile scrum",
        level: level.competent,
        experience: 7,
      },
      {
        title: "Competence Manager",
        level: level.proficient,
        experience: 1,
      },
    ],
  },
]
