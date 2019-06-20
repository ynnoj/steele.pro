import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import styled, { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'

export const Link = styled.a`
  ${tw`border-0 border-b-2 border-gray-200 border-solid no-underline pb-1 relative text-gray-800`}

  &:after {
    ${tw`absolute border-0 border-b-2 border-indigo-700 border-solid left-0 w-0`}
    content: '';
    transition: width 0.2s ease-in-out;
    bottom: calc(0px - 0.15rem);
  }

  &:hover:after,
  &:active:after {
    ${tw`w-full`}
  }
`
const Main = tw.main`md:w-3/4 mx-auto px-6 md:px-4 text-gray-800`
const Title = tw.h1`m-0 text-3xl md:text-4xl`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
  }
`

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
      <GlobalStyle />
      <MDXProvider
        components={{
          a: props => <Link {...props} />,
          h1: props => <Title {...props} />,
        }}
      >
        <Main>{children}</Main>
      </MDXProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
