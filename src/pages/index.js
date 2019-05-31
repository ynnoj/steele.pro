import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Section = tw.section`flex flex-col sm:flex-row items-center justify-center min-h-screen py-0 px-8`

const Profile = tw.div`flex flex-col sm:ml-4 mt-4 sm:mt-0`

const Title = tw.h1`mb-2 mt-0 text-4xl`

const Subtitle = styled.div`
  p {
    ${tw`leading-normal m-0`}
  }

  a {
    ${tw`border-0 border-b-2 border-gray-500 border-solid no-underline pb-1 relative text-black`}

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
  }
`

const IndexPage = ({
  data: {
    contentfulAsset: { fixed },
    contentfulPage: {
      subtitle: {
        childMarkdownRemark: { html: subtitle },
      },
      title,
    },
  },
}) => (
  <Layout>
    <Section>
      <Img fixed={fixed} />
      <Profile>
        <Title>{title}</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      </Profile>
    </Section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query pageQuery {
    contentfulAsset(title: { eq: "avatar" }) {
      fixed(width: 120, quality: 100) {
        ...GatsbyContentfulFixed
      }
    }
    contentfulPage(slug: { eq: "home" }) {
      subtitle {
        childMarkdownRemark {
          html
        }
      }
      title
    }
  }
`
