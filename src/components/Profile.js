import React from 'react'
import Img from 'gatsby-image'
import tw from 'tailwind.macro'

const Header = tw.header`border-0 border-b-2 border-gray-200 border-solid flex flex-col md:flex-row items-center mb-6 md:mb-8 py-6 md:py-8`
const StyledImg = tw(Img)`mb-4 md:mb-0 md:mr-8`
const Title = tw.div`flex flex-col`

function Profile({ avatar, children }) {
  return (
    <Header>
      <StyledImg alt="Jonathan Steele" fixed={avatar} title="Jonathan Steele" />
      <Title>{children}</Title>
    </Header>
  )
}

export default Profile
