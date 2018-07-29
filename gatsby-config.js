require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Jonathan Steele - JavaScript Engineer',
    description: 'Full-stack JavaScript engineer in Newcastle upon Tyne',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
    'gatsby-transformer-remark',
  ],
}
