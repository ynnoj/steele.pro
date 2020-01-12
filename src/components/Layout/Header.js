import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

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
    <header className="border-0 border-b-2 border-gray-200 border-solid flex flex-col md:flex-row items-center mb-6 md:mb-8 py-6 md:py-8">
      <Img
        fluid={avatar.childImageSharp.fluid}
        className="mb-4 md:mb-0 md:mr-8 rounded-sm w-24"
        alt="Jonathan Steele"
        title="Jonathan Steele"
      />
      <div className="flex flex-col">
        <h1 className="font-semibold mb-2 text-3xl md:text-4xl">
          Jonathan Steele
        </h1>
      </div>
    </header>
  )
}

export default Header
