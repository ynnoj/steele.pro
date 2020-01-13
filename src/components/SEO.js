import React from 'react'
import Helmet from 'react-helmet'

import useSiteMetadata from '../hooks/useSiteMetadata'

function SEO({ pageDescription, pageTitle }) {
  const { description: siteDescription, title: siteTitle } = useSiteMetadata()

  return (
    <Helmet
      defaultTitle={siteTitle}
      titleTemplate={`%s - ${siteTitle}`}
      title={pageTitle}
    >
      <meta name="description" content={pageDescription || siteDescription} />
    </Helmet>
  )
}

export default SEO
