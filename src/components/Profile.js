import React from 'react'
import Img from 'graphcms-image'

function Profile({ avatar, children }) {
  return (
    <header className="border-0 border-b-2 border-gray-200 border-solid flex flex-col md:flex-row items-center mb-6 md:mb-8 py-6 md:py-8">
      <Img
        className="mb-4 md:mb-0 md:mr-8"
        alt="Jonathan Steele"
        image={avatar}
        title="Jonathan Steele"
        withWebP
        style={{
          width: 120,
        }}
      />
      <div className="flex flex-col">{children}</div>
    </header>
  )
}

export default Profile
