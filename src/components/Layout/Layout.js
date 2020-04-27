import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Footer from './Footer'
import Header from './Header'
import PodcastShowList from '../PodcastShowList'
import Renderers from '../Renderers'
import SEO from '../SEO'
import SocialLinks from '../SocialLinks'
import Subtitle from '../Subtitle'
import TalkList from '../TalkList'

function Layout({ children, pageContext }) {
  return (
    <React.Fragment>
      <SEO pageTitle={pageContext.frontmatter.title} />
      <MDXProvider
        components={{
          PodcastShowList,
          SocialLinks,
          Subtitle,
          TalkList,
          ...Renderers,
        }}
      >
        <div className="min-h-screen">
          <Header />
          <main className="mx-auto md:py-8 max-w-3xl px-4 py-6">
            {children}
          </main>
        </div>
      </MDXProvider>
    </React.Fragment>
  )
}

export default Layout
