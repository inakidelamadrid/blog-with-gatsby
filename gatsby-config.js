/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    description: "Thoughts and wanderings",
    githubURL: "https://github.com/inakidelamadrid",
    linkedinURL: "https://www.linkedin.com/in/ignacio-de-la-madrid-6bb25629/",
    title: "Borealsummit's Blog",
    twitterURL: "https://twitter.com/borealsummit",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
