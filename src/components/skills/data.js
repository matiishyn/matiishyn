const skillLevel = {
  novice: 1,
  competent: 2,
  proficient: 3,
  expert: 4,
}

export const skillLevelLabel = {
  [skillLevel.novice]: "novice",
  [skillLevel.competent]: "competent",
  [skillLevel.proficient]: "proficient",
  [skillLevel.expert]: "expert",
}

export const skills = [
  {
    groupTitle: "front end",
    groupSkills: [
      {
        title: "HTML5/CSS3",
        level: skillLevel.expert,
        experience: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
      },
      {
        title: "SASS/SCSS",
        level: skillLevel.expert,
        experience: [2013,2014,2015,2016,2017,2018,2019,2020,2021],
      },
      {
        title: "Bootstrap",
        level: skillLevel.expert,
        experience: [2013,2014,2015,2016,2017,2018,2019,2020,2021],
      },
      {
        title: "JavaScript, ES6",
        level: skillLevel.expert,
        experience: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
      },
      {
        title: "React.js ecosystem",
        level: skillLevel.expert,
        experience: [2015,2016,2017,2018,2019,2020,2021],
      },
      {
        title: "TypeScript",
        level: skillLevel.expert,
        experience: [2017,2018,2019,2020,2021],
      },
      {
        title: "Next.js",
        level: skillLevel.expert,
        experience: [2018,2019,2020,2021],
      },
      {
        title: "Angular",
        level: skillLevel.proficient,
        experience: [2014,2015,2016],
      },
      {
        title: "Gatsby.js",
        level: skillLevel.proficient,
        experience: 2,
      },
      {
        title: "Angular.js",
        level: skillLevel.proficient,
        experience: 4,
      },
      {
        title: "Backbone.js",
        level: skillLevel.proficient,
        experience: 2,
      },
      {
        title: "Webpack/Gulp",
        level: skillLevel.expert,
        experience: 5,
      },
    ],
  },
  {
    groupTitle: "back end",
    groupSkills: [
      {
        title: "Node.js",
        level: skillLevel.proficient,
        experience: 4,
      },
      {
        title: "Express.js",
        level: skillLevel.proficient,
        experience: 4,
      },
      {
        title: "Firebase DataBase",
        level: skillLevel.proficient,
        experience: 3,
      },
      {
        title: "Firebase Functions",
        level: skillLevel.proficient,
        experience: 3,
      },
      {
        title: "SSR Next.js",
        level: skillLevel.proficient,
        experience: 2,
      },
      {
        title: "SSR Gatsby.js",
        level: skillLevel.proficient,
        experience: 2,
      },
      {
        title: "SQL",
        level: skillLevel.competent,
        experience: 2,
      },
      {
        title: "MongoDB",
        level: skillLevel.competent,
        experience: 2,
      },
      {
        title: "AWS Infrastructure",
        level: skillLevel.competent,
        experience: 1,
      },
      {
        title: "AWS Lambda",
        level: skillLevel.novice,
        experience: 1,
      },
    ],
  },
  {
    groupTitle: "leadership",
    groupSkills: [
      {
        title: "Agile scrum",
        level: skillLevel.expert,
        experience: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
      },
      {
        title: "Team Lead",
        level: skillLevel.proficient,
        experience: 4,
      },
      {
        title: "Competence Manager",
        level: skillLevel.proficient,
        experience: 1,
      },
    ],
  },
]

//
// LANGUAGES
//

const langLevel = {
  elementary: 1,
  intermediate: 2,
  upperIntermediate: 3,
  advanced: 4,
  native: 5,
}


export const langLevelLabel = {
  [langLevel.elementary]: "elementary (A1)",
  [langLevel.intermediate]: "intermediate (B1)",
  [langLevel.upperIntermediate]: "upper-intermediate (B2)",
  [langLevel.advanced]: "advanced (C1)",
  [langLevel.native]: "native",
}

export const languages = [
  {
    title: "English",
    level: langLevel.advanced,
  },
  {
    title: "Polish",
    level: langLevel.upperIntermediate,
  },
  {
    title: "Russian",
    level: langLevel.advanced,
  },
  {
    title: "Ukrainian",
    level: langLevel.native,
  },
]

export const certifications = [
  {
    title: "AWS Certified Solutions Architect Associate",
    dates: "2020",
  },
  {
    title: "Microsoft: Programming in HTML5 with JavaScript and CSS3",
    dates: "2015",
  },
  {
    title: "Microsoft: Microsoft Certified Professional",
    dates: "2015",
  },
  {
    title: "Prometric: CIW JavaScript Specialist",
    dates: "2014",
  },
]

