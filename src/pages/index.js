import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 4rem;

  @media (min-width: 30rem) {
    flex-direction: row;
  }
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 0;

  @media (min-width: 30rem) {
    margin: 0 0 0 1rem;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 1rem;
`

const Subtitle = styled.div`
  p {
    line-height: 1.4;
    margin: 0;
  }

  a {
    border-bottom: 2px solid silver;
    color: inherit;
    padding-bottom: 0.1rem;
    text-decoration: none;
    position: relative;

    &:after {
      content: '';
      transition: width 0.2s ease-in-out;
      border-bottom: 2px solid #784cab;
      position: absolute;
      left: 0;
      bottom: calc(0px - 0.15rem);
      width: 0;
    }

    &:hover:after,
    &:active:after {
      width: 100%;
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
