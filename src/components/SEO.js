import React from 'react'
import Helmet from 'react-helmet'

import useSiteMetadata from '../hooks/useSiteMetadata'

function SEO() {
  const { description, title } = useSiteMetadata()

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        { name: 'keywords', content: 'JavaScript, Newcastle upon Tyne' },
      ]}
    />
  )
}

export default SEO
