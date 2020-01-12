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
              activeClassName="bg-gray-300"
              className="font-semibold hover:bg-gray-300 px-2 py-1 rounded text-gray-600 text-sm tracking-widest uppercase"
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
