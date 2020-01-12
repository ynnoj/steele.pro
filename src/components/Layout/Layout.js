import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import Footer from './Footer'
import Header from './Header'
import Renderers from '../Renderers'
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
          TalkList,
          ...Renderers,
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
