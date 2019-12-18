import React from 'react'
import Img from 'gatsby-image'

function Profile({ avatar, children }) {
  return (
    <header className="border-0 border-b-2 border-gray-200 border-solid flex flex-col md:flex-row items-center mb-6 md:mb-8 py-6 md:py-8">
      <Img
        fluid={avatar.childImageSharp.fluid}
        className="mb-4 md:mb-0 md:mr-8 rounded-sm w-24"
        alt="Jonathan Steele"
        title="Jonathan Steele"
      />
      <div className="flex flex-col">{children}</div>
    </header>
  )
}

export default Profile
