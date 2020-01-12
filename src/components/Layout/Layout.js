import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import Footer from './Footer'
import Header from './Header'
import TalkList from '../TalkList'

function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    {
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
          a: props => (
            <a className="font-medium underline" {...props}>
              {props.children}
            </a>
          ),
          p: props => (
            <p className="leading-relaxed mb-2" {...props}>
              {props.children}
            </p>
          ),
          h1: props => (
            <h1 className="font-semibold mb-2 text-4xl md:text-5xl" {...props}>
              {props.children}
            </h1>
          ),
          ul: props => (
            <ul className="flex list-none my-0 -mx-4 p-0" {...props} />
          ),
          li: props => <li className="mx-4" {...props} />,
          TalkList,
        }}
      >
        <div className="min-h-screen">
          <Header />
          <main className="mx-auto md:py-8 md:w-3/5 px-4 py-6">{children}</main>
          <Footer />
        </div>
      </MDXProvider>
    </React.Fragment>
  )
}

export default Layout
