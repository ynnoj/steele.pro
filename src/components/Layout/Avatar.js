import React, { memo } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import useSiteMetadata from '../../hooks/useSiteMetadata'

function Avatar() {
  const { title: siteTitle } = useSiteMetadata()
  const { avatar } = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Link to="/" className="flex items-center font-medium text-lg md:text-xl">
      <Img
        fluid={avatar.childImageSharp.fluid}
        className="hidden md:block mr-4 rounded-full w-12"
        alt={siteTitle}
        title={siteTitle}
      />
      {siteTitle}
    </Link>
  )
}

export default memo(Avatar)
