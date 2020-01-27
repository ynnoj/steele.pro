import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Footer from './Footer'
import Header from './Header'
import Renderers from '../Renderers'
import SEO from '../SEO'
import SocialLinks from '../SocialLinks'
import TalkList from '../TalkList'

function Layout({ children, pageContext }) {
  return (
    <React.Fragment>
      <SEO pageTitle={pageContext.frontmatter.title} />
      <MDXProvider
        components={{
          SocialLinks,
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
