require(`dotenv`).config()

const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Jonathan Steele`,
    description: `Full-stack JavaScript engineer in Newcastle upon Tyne`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 800,
              quality: 80,
              withWebp: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GraphCMS`,
        fieldName: `gcms`,
        url: process.env.GRAPHCMS_URL,
        headers: {
          Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
      },
    },
    {
      resolve: `gatsby-source-transistorfm`,
      options: {
        url: `https://feeds.transistor.fm/jamcommcerce-radio`,
      },
    },
    {
      resolve: `gatsby-source-transistorfm`,
      options: {
        url: `https://feeds.transistor.fm/devonthetyne`,
      },
    },
    {
      resolve: `gatsby-source-transistorfm`,
      options: {
        url: `https://feeds.transistor.fm/first-means-everything-radio`,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
