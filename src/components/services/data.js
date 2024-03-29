import { START_YEAR } from "../about/data"

export const services = [
  {
    title: "Front End Developer",
    description: `My primary skill is front end development<br>
                  I’ve been doing it for ${new Date().getFullYear() - START_YEAR + 1} years.
                  Took part in different project phases, 
                  created projects from scratch, 
                  established front-end architecture and successfully released them.
    `,
    tags: ["react", "angular", "angular.js", "scss", "bootstrap"],
  },
  {
    title: "Full Stack Developer",
    description: `My secondary skill is Node.js<br> 
                  I have experience developing 
                  Node.js Apps with Express.js using 
                  MongoDB and SQL, Serverless Web Apps, 
                  ServerSideRendered Web Apps
    `,
    tags: ["node", "express", "firebase", "next", "gatsby"],
  },
  {
    title: "Team Leader / Manager",
    description: `- Team Leader of a team up to 10 people<br>
                  - Development Community leader<br> 
                  - Competence manager<br>
                  - Software Engineering manager<br>
                  - Interviewer<br>
                  `,
    tags: ["teamlead"],
  },

  {
    title: "Mentor / Teacher / Speaker",
    description: `- Mentor<br>
                  - Speaker<br>
                  - Course Creator<br>
    `,
  },
]
