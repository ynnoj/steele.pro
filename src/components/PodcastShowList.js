import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Paragraph from './Renderers/Paragraph'

function PodcastShowList() {
  const {
    allTransistorShow: { nodes: shows },
  } = useStaticQuery(graphql`
    query AllPodcastShows {
      allTransistorShow {
        nodes {
          description
          episodes {
            link
            pubDate
            title
          }
          image {
            childImageSharp {
              fluid(maxWidth: 560) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
      }
    }
  `)

  return (
    <section>
      {shows.map((show, index) => {
        const [latestEpisode] = show.episodes

        const formattedDate = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(latestEpisode.pubDate))

        return (
          <article key={index} className="flex mb-8 last:mb-0 w-full">
            <div className="hidden md:block mr-4 w-1/5">
              <Img
                fluid={show.image.childImageSharp.fluid}
                className="lg:mb-4 mr-4 lg:mr-0 rounded w-full"
                alt={show.title}
                title={show.title}
              />
            </div>
            <div className="w-full md:w-4/5">
              <div className="mb-4">
                <h2 className="font-medium text-xl md:text-2xl">
                  {show.title}
                </h2>
                <span className="font-semibold text-gray-600 text-sm tracking-widest uppercase">
                  Latest episode: {formattedDate}
                </span>
              </div>
              <Paragraph className="leading-relaxed mb-4">
                {show.description}
              </Paragraph>
              <a
                className="text-orange-600"
                href={latestEpisode.link}
                target="blank"
                norel="true"
                nofollow="true"
              >
                Listen now &#x2192;
              </a>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default PodcastShowList
