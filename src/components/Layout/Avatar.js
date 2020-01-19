import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import useSiteMetadata from '../../hooks/useSiteMetadata'

function Avatar() {
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

  const { title: siteTitle } = useSiteMetadata()

  return (
    <div className="flex items-center">
      <Link to="/" className="mr-4">
        <Img
          fluid={avatar.childImageSharp.fluid}
          className="rounded-full w-12"
          alt="Jonathan Steele"
          title="Jonathan Steele"
        />
      </Link>
      <Link to="/" className="font-medium text-lg md:text-xl">
        {siteTitle}
      </Link>
    </div>
  )
}

export default Avatar
