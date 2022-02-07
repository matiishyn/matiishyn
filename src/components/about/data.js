import {
  faInstagram,
  faLinkedin,
  faSkype,
  faGithub
} from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"

export const START_YEAR = 2013

export const info = {
  h3: "Hi, I'm Ivan Matiishyn",
  h4: "Full Stack JavaScript Developer",
  p: `I'm a web developer with ${new Date().getFullYear() - START_YEAR + 1}
              years of professional expertise in the IT industry. I have rich
              experience in building complex single page applications for
              banking, e-commerce, healthcare, finance, management systems,
              insurance as well as other solutions`,
}

export const social = [
  {
    icon: faSkype,
    title: "ivan.matiyishyn",
    url: "skype:ivan.matiyishyn?chat",
  },
  {
    icon: faAt,
    title: "matiyishyn.ivan@gmail.com",
    url: "mailto:matiyishyn.ivan@gmail.com",
  },
  {
    icon: faLinkedin,
    title: "/in/matiishyn",
    url: "https://www.linkedin.com/in/matiishyn/",
  },
  {
    icon: faGithub,
    title: "/matiishyn",
    url: "https://github.com/matiishyn",
  },
  {
    icon: faInstagram,
    title: "/i.matiishyn",
    url: "https://www.instagram.com/i.matiishyn/",
  },
]
