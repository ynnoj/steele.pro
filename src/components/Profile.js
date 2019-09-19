import React from 'react'
import Img from 'graphcms-image'
import tw from 'tailwind.macro'

const Header = tw.header`border-0 border-b-2 border-gray-200 border-solid flex flex-col md:flex-row items-center mb-6 md:mb-8 py-6 md:py-8`
const StyledImg = tw(Img)`mb-4 md:mb-0 md:mr-8`
const Title = tw.div`flex flex-col`

function Profile({ avatar, children }) {
  return (
    <Header>
      <StyledImg
        alt="Jonathan Steele"
        image={avatar}
        title="Jonathan Steele"
        withWebP
        style={{
          width: 120,
        }}
      />
      <Title>{children}</Title>
    </Header>
  )
}

export default Profile
