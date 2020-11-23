require("dotenv").config()

module.exports = {
  proxy: [
    {
      prefix: "/api",
      url: process.env.GATSBY_API_URL,
    },
  ],
  siteMetadata: {
    title: `Lederhuset`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["REACT_API_URL", "REACT_API_RE_KEY"],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
