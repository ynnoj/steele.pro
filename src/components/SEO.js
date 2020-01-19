import React from 'react'
import Helmet from 'react-helmet'

import useSiteMetadata from '../hooks/useSiteMetadata'

function SEO({ pageDescription, pageTitle }) {
  const { description: siteDescription, title: siteTitle } = useSiteMetadata()

  return (
    <Helmet defaultTitle={siteTitle} titleTemplate={`%s - ${siteTitle}`}>
      <html lang="en" amp />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription || siteDescription} />
      <meta name="og:title" content={pageTitle} />
      <meta
        name="og:descriptipn"
        content={pageDescription || siteDescription}
      />
      <meta name="og:type" content="website" />
    </Helmet>
  )
}

export default SEO
