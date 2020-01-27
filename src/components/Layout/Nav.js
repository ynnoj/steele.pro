import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

function Nav() {
  const {
    allMdx: { nodes: pages },
  } = useStaticQuery(graphql`
    {
      allMdx(filter: { frontmatter: { title: { nin: "Home" } } }) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `)

  return (
    <nav>
      <ul className="flex -mx-2">
        {pages.map(({ frontmatter: { title } }, i) => (
          <li className="mx-2" key={i}>
            <Link
              to={`/${title.toLowerCase()}`}
              activeClassName="text-gray-900"
              className="hover:text-gray-900 py-1 text-gray-600 text-lg"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
