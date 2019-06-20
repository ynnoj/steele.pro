import React from 'react'
import Img from 'gatsby-image'
import tw from 'tailwind.macro'

const Section = tw.section`border-0 border-b-2 border-gray-200 border-solid flex flex-col md:flex-row items-center mb-8 py-8`
const StyledImg = tw(Img)`mb-4 md:mb-0 md:mr-8`
const Title = tw.div`flex flex-col`

function Profile({ avatar, children }) {
  return (
    <Section>
      <StyledImg alt="Jonathan Steele" fixed={avatar} title="Jonathan Steele" />
      <Title>{children}</Title>
    </Section>
  )
}

export default Profile
