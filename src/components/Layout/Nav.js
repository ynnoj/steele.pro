import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import classnames from 'classnames'

function Nav({ navOpen }) {
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
    <nav
      className={classnames({
        'hidden md:block': !navOpen,
        block: navOpen,
      })}
    >
      <ul className="md:flex mt-4 md:mt-0 -mx-2 md:-mx-4">
        {pages.map(({ frontmatter: { title } }, i) => (
          <li className="mx-2 md:mx-4" key={i}>
            <Link
              to={`/${title.toLowerCase()}`}
              activeClassName="text-gray-900"
              className="block hover:bg-gray-100 md:hover:bg-transparent hover:text-gray-900 text-gray-600 text-lg px-4 py-2 md:p-0"
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
