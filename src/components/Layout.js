import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import '../styles/index.css'

function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Helmet
        title={site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: site.siteMetadata.description,
          },
          { name: 'keywords', content: 'JavaScript, Newcastle upon Tyne' },
        ]}
      />
      <MDXProvider
        components={{
          a: props => <a {...props}>{props.children}</a>,
          p: props => (
            <p className="mt-0" {...props}>
              {props.children}
            </p>
          ),
          h1: props => (
            <h1 className="mb-6 mt-0 text-3xl md:text-4xl" {...props}>
              {props.children}
            </h1>
          ),
          ul: props => (
            <ul className="flex list-none my-0 -mx-4 p-0" {...props} />
          ),
          li: props => <li className="mx-4" {...props} />,
        }}
      >
        <main className="md:w-3/4 mx-auto px-6 md:px-4 text-gray-800">
          {children}
        </main>
      </MDXProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
