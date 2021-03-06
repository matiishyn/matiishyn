import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

fairyGatesTheme.baseFontSize = "18px";
fairyGatesTheme.headerFontFamily = ["Raleway", "sans-serif"]

fairyGatesTheme.googleFonts = [
  {
    name: "Raleway",
    styles: ["400", "700"],
  },
  {
    name: "Quattrocento Sans",
    styles: ["400", "400i", "700"],
  },
  {
    name: "Fira Code",
    styles: ["400"],
  },
]

const typography = new Typography(fairyGatesTheme)

export default typography
