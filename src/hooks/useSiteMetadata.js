import { graphql, useStaticQuery } from 'gatsby'

function useSiteMetadata() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `
  )

  return siteMetadata
}

export default useSiteMetadata
