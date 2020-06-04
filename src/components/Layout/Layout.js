import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Header from './Header'
import PodcastShowList from '../PodcastShowList'
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
          PodcastShowList,
          SocialLinks,
          TalkList,
          ...Renderers,
        }}
      >
        <div className="min-h-screen">
          <div className="bg-black">
            <div className="max-w-3xl mx-auto p-4">
              <p className="md:text-base text-sm text-white">
                <strong>#BlackLivesMatter</strong>.{' '}
                <a
                  className="underline"
                  href="https://secure.actblue.com/donate/ms_blm_homepage_2019"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support the movement
                </a>
              </p>
            </div>
          </div>
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
