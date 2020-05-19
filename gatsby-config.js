module.exports = {
  siteMetadata: {
    title: `Ivan Matiishyn - JavaScript Developer`,
    description: `Ivan Matiishyn - Full Stack JavaScript Developer`,
    author: `ivan.matiishyn@gmail.com`,
    image: "/me_small.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ivan Matiishyn | JavaScript Developer`,
        short_name: `Ivan Matiishyn | JavaScript Developer`,
        start_url: `/`,
        background_color: `#e54b4b`,
        theme_color: `#e54b4b`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
