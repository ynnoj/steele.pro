import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { Link } from './Layout'

const TalkDate = tw.span`text-sm text-gray-600`
const TalkLinkList = tw.ul`flex list-none -mx-4 p-0`
const Talk = styled.article`
  ${({ lastChild }) => (lastChild ? tw`mb-0` : tw`mb-8`)}
`
const TalkLink = tw(Link)`mx-4`
const TalkTitle = tw.h3`mb-2`

function TalkList() {
  const {
    allContentfulTalk: { edges: talks },
  } = useStaticQuery(graphql`
    query AllTalks {
      allContentfulTalk(sort: { fields: date, order: DESC }) {
        edges {
          node {
            date(formatString: "LL")
            deckUrl
            description
            id
            title
            repositoryUrl
            videoUrl
          }
        }
      }
    }
  `)

  return (
    <section>
      <h2>Talks</h2>
      {talks.map(({ node: talk }, index) => {
        const talkLinks = [
          ...(talk.deckUrl
            ? [
                {
                  label: 'Deck',
                  url: talk.deckUrl,
                },
              ]
            : []),
          ...(talk.repositoryUrl
            ? [
                {
                  label: 'GitHub',
                  url: talk.repositoryUrl,
                },
              ]
            : []),
          ...(talk.videoUrl
            ? [
                {
                  label: 'Video',
                  url: talk.videoUrl,
                },
              ]
            : []),
        ]

        return (
          <Talk key={talk.id} lastChild={index + 1 === talks.length}>
            <TalkTitle>{talk.title}</TalkTitle>
            <TalkDate>{talk.date}</TalkDate>
            <p>{talk.description}</p>
            {talkLinks.length > 0 && (
              <TalkLinkList>
                {talkLinks.map(link => {
                  return (
                    <li key={link.label}>
                      <TalkLink href={link.url}>{link.label}</TalkLink>
                    </li>
                  )
                })}
              </TalkLinkList>
            )}
          </Talk>
        )
      })}
    </section>
  )
}

export default TalkList
