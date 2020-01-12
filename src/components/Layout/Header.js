import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Nav from './Nav'

function Header() {
  const {
    gcms: {
      asset: { node: avatar },
    },
  } = useStaticQuery(graphql`
    {
      gcms {
        asset(where: { slug: "avatar" }) {
          node {
            childImageSharp {
              fluid(maxWidth: 560) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          url
        }
      }
    }
  `)

  return (
    <header className="border-0 border-b-2 border-gray-200 border-solid items-center px-4 py-6 md:py-8">
      <div className="flex items-center justify-between md:w-3/4 mx-auto">
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
            Jonathan Steele
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header
